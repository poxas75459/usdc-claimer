/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "W3z8C9NJigNrhkTayeKUPQqnxrEbaaH4MdMavjwV5cWroyVdxrE4ggPcFdje6PUNDmsFySPT9pZ1fWnfv8Y5EMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nDi6kLZA1iWtqEGWUSRstVrCGkXFZ2U33HJgBR2czej962MLRbFDjCZNNCmu2HzfxABtQPCsNgjey4JJcZSeSa8",
  "key1": "2PrioaQ39Tq5uJfNZTrVnwgfT16nRLMntr5BYMqirmkKBDMDmbg6JWq3y2qwkzDQGqw99AqAJAsWFuZgKWHzMViK",
  "key2": "23xQ3hw8X5aG5QXnxZEoBqAtJDpb7zP7c4p219SMc2ykyfhDEgjRQbQtwVCKCfNVRiUZu6FzHeVGkKYA65UwhPwP",
  "key3": "3TKZfMKkgXdFyDhP2WkEGoMXCQSMPnvHiLuAmc9UghxiDRwrPvM913hBAB6hP39CGLpmZNZqmywQByvq3osPkQbT",
  "key4": "3uDgsQpwaVAEwjvxswaMgriGruqHiw7kpZikPGsuEgMu9ReBiwvboYtfwuVR3BuhEUDsboqfhpAdLRmZKCGEjdjS",
  "key5": "3Ha2kcRA4FJf34U7FYhHNcSKVfA4fBLmEX6M62K61GNPUHP57nvxDFYKNshykXGRYHDjxgG8AwbHe9uFBBJ51AVX",
  "key6": "27gV6P3EbZ7seyF7X9oBYvSWudt7ChtEWN4vnv9mnh2TEGfYDQS44AHpYpGu72QZUgD3tMe3dUvuSdpgMKLA8DgR",
  "key7": "2ZuusmcJRg63zY1XQagxCo9FtNapuPj3DT7mZgrZUjVMpSSfnZmHBTp4yEwdBvUR6TvhkPVZn9datcEAbf1X4pu2",
  "key8": "vGaumQFchSzzgykGtBPGsaon1ocz4ASRAaRP7P1BgqGUMe7w9jyT4U7U4L9xLpGtWU96GiZeXv5KxSHFauRHtJa",
  "key9": "52KX9bLom7xxWDxEYTYtZ46HuiVKcuKEFFL4StRscHv9Nm4gF2DxHspMk8zApfkgYQ3AqxdrhRrkoDQ7y2KpzLWZ",
  "key10": "TUqpUcCsApRGWk4VzmJD7SiPt5QvPDYPDYk5QAs6W4hTvpSCEBuY6775ikDfMiBVjLk8L3JkGyLK7tK6udf2gNF",
  "key11": "2LmDgMhHD4bp3JeGCBR5zuJzeysvTVBXuh1G9iR2VyWUUrCDX2LhRHX7rKAYEc4NWRNUsp114pbDDrbsMTyfLqm4",
  "key12": "bE1n5kcTPCWHkbqdvee5NC4fss5sd5pjBNaLfdx9qVFuMCTFSep2GtiqJ6RCNYpdCKyS7994dLTQTnU6R95NsYF",
  "key13": "4mLc3MMCXeEoySrWKydfFDWHYnwrTarUmohXhWE2wJnJVxsY9ZnfSuKC3mPLE8hHa1iw8AxQAH8mXQ79popYQLJE",
  "key14": "2zHGG2deNT357ZKKY42hWxiPRCcQWXN7Zvk6RFA9uDqn6dzQ7VGLHnyxunXMc6Q94bp1s7JFudHMWpvsQ8jsXFeM",
  "key15": "4o9ccdTNSLp8WRNq3hcTnKA38VAfdd6pBfWNo4HgNx7YCcvjJDzATvfVPqNtaat4GMfW83j34LtC2oPWYDoVb6Ht",
  "key16": "34hkpbaLnTrfUKfVy5QNvwM7DqaWq76cjXhHL2yihQ8oTz8PdBPk8mdvmeJ8ZGWcazihV5qiVCWarat4GcrfNahB",
  "key17": "2i8w5ynKooKa3X1bybTpnjPDS6Q763yJMRXVgAsx8aUfHdUc5cwAfzJ3psaAhoZwccKHyyvDN2cGtACLTtM57c2n",
  "key18": "3gE8mr8yAzhHQp7GfPtDkZTVvGoLsnVooiVKWZhCWy8Afh6UKgEQZw2J16Ma1G7GkCx6Y7i77U9s6e6KPf5h3WZL",
  "key19": "4bPtn2RihpZFoXLHz6vqQo2AyjPeSEQ2cx9N7VWerkspeHuai4Kw3swBNVaiyynwA1u3zb9K7DF9HMjo6aa1sTPi",
  "key20": "5UxhjYSh1cwV83W3o9S9JEbitycJy12nYH4VbcFdNDFUHwcXqCths1BTDru52TV1a4Zyy4txnjSuTartH9RWSMZ6",
  "key21": "KD4Wo8mJ6wBa4Sk9yW38576xmYjCtSANktBUJAAeFpvcgMxLCHDBJmhYwbcVAaB3X9xMUCrbNvHQQt4THkwh63u",
  "key22": "ALdRFRBC3rSmwjpx5U6gsSN1vE446FkYgHzPCGy7CuUSenXH3WkYaHXqvQQ9bP2PG4DxDM5SorLhE54yAiNmjwX",
  "key23": "46xGDPVTuoueVGdV2hY1ZGjCLHCrf91mLMo8BoLSeofrQet21FBzUtbFkwBQxsg5MTK1PTTVpBBmn8htYdwxQ7tU",
  "key24": "128xUpcfFnF3L97xFRXxneBXYGF5de3uHm7pFc75Pizs4VTcpHHViLkdmqMABskmDbQW89yaeWUKFQ5vNhP84XeW",
  "key25": "5rwL9pgpsMS6fhcDmVq6rSEwKAHasLmpZR7HNqG78wXCoW8FJd1x7mkvZ2hjPb2KKjy1GrTkfWYaNVEzypUMU7wK",
  "key26": "3ruJ8yLxLSRZ9SGGSaBTh5TxvXW8DXJNLbUCUpEC8b8nFFQrQmDr3QDctU8QWr9GqzXoyvpciQzGxd2R3Yzsssqb",
  "key27": "YuWx3uucMWnpuEBdHtedFJv5vZgmfPAv4MhB1CGn7CoHBiWSCNV9phhYBK5QBUje4WoddmkeMo37YYHEEJVHUpf",
  "key28": "417SwQX7wQz9pphFtaegPqtpkCBHpzK5do4Qs2u8YNWYko2H15BdbtX8rmhRrmDTi3BuQ9pno2pMXmNV4jmq2xcr",
  "key29": "2e5XrA8AeBcFxXW4Kzy4nw9qPF8g7RJ1Lvt65r5KpqwGqvgJvsiZqbqorjiuzVcYNq2qW3V4kM343QrD691bPvbZ",
  "key30": "2F2jergBvFVjrSSx6bfxC1NgCekkM1tHtkAZdWnjLeZaysvLjCv6nSM16RmkoUnFyFjPNBVMFY196iNFtaBRYCyu",
  "key31": "2DLc3Nt3Uj8zPj6Tr5Z8VZYDhX6hTiNdPMWg3A4qgFQrwC3Btk1TY4U3qK8nXNmtUXGtkdMqLRCZEgqa3zdRss3H"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
