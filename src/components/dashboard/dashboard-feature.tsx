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
    "3EbPGQpWjMn51diipNAgvmB2axRuJY8Vp86hamPAhg1LpKcy8WnptGcToiwbusE2RWFMTKZ8pF1N9jBLSmD5iyjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfZBkGHem54BCKCFRawZtPk8eFbvV9Reth8mbZojK1aegQ2bS9Uy7XN2qLaa4k9n191VmYHwA4Fz2k584KLuHLV",
  "key1": "3PjNjHRPRfD1ZBwjQY6wTR746gjAvf9uHWYbvBFNcE1J6iqGH4SzLMTvSa2PpgrZHTXbnV3Gdgs4CksyKnHFNWrv",
  "key2": "5jfr3uX3gYeHU6ubqNqXeebb2uMDkHLd8hJU6igwa7x8xYzbyzS4qDHoE6BuiAtcKrBu9RZjLnUxsYTHiUQbGdRU",
  "key3": "3hhkuQ3cZhiZRTqchd5vrk3mu6dhJ26Lky2mSVcAUPKBgwJ7EPb6gWv3XKaVzfd3pELmQdL9s2bqPHYjHvDUH7Tz",
  "key4": "L9aniBt2L2Cvabrsj8ksf6kg3myFDFdJrvBvuzG5h8Nw8gNs4U2uVgxafLRKNeX1jjnEeGUvAMhmd1JiHdjAkVX",
  "key5": "2uYgJt3DoSSXfvtkgXAYAyHCEYToCRizakAQ2Ywa2bUSHds9VV32f3heZy9opm7BzWxpneg3yoP7yZAxCrrchMgb",
  "key6": "5544zNCM78cymUo4LNZrxUz9vKJfZrC9FzvdiEYC9iTZTGB9gw8xjf4C4ZcDLJB4uemx3UHZL3S42S58PevjBq2p",
  "key7": "61JzBuWiqjAiTfvs7RQCu5X448x6U5AvPG5oFXrwavtrembDPkhJWhX15CfBFJMuDUsYVwhvZUjzHToRkLtmw9WZ",
  "key8": "5j97LtBQJocDkuJVXKoiCmpTmk2f6ziruPMc64MQtLBiLyLxNFCpAWRsdgcagzfRzDezkizQYeAsspzttaFEqqng",
  "key9": "66Fn9QLb5ypjJ5SLwHJXugm2KPtj8cLVyQZiFQ8VjScZWp4tF83uLqbhQR6kCaxEG4gKtJbM2PCoJSS2RMm4cK2y",
  "key10": "EFbb2sU7Nn7gcF5gx2JcnkzTQRbvYgtrPAn7DPK9NRkPfKvFDGg3JqH4DAAiPEh74dbSGDLAbyRUC9kB4vQfPRs",
  "key11": "2vYBsPPPiLKwcXVgnBuv9vcNECg19jSPv8H25xYwjVshXgRn8b3RjZHDizmVTWVH1GMr2k9bBKXoBjyyaiZFMfMP",
  "key12": "3BEJr7ncyQjUqSPWNfpy9DhSNBDJrLRuhXYLRdNcFPSWvp5smYCz1WGCkbyJqZX9yWrm9uekrhbmkY5bzuuEbQgR",
  "key13": "3A99LEsknCeC2h4H5zScZCN2eofHjrmPmjbvAEmJeqjcrnGiXnNpKvZmy67nu9SnRD4AT5Q2yKLEbiaQs6mZ9Sxj",
  "key14": "54kLEJuYV2gBPLC6aL2nAndHA8bCc7NVmJzyTVkpni91fzoM6CVJpvvE5TncD4xgLJT61WKcnYLVna29T3JWBi9f",
  "key15": "VxKv7TSnpVd6L359M51WVmT2LUSUkYZ4wEKnEGcerCQN4u5hY2gN1dei6QJYbTFp93cPSWVziYsd4FbFdnJ2ydS",
  "key16": "61t98RJzdvSu5RdcQw2cfB3BZxNuCdsx3UrBT1jGHAY3D6oAYpf7MZLkzabETaPCQDUXN8ky3FLJEHHJmsN75VcL",
  "key17": "Y6BoWxnSTcP3reK92fa5UmkEWFG3kUqd5Mgv2omjSNsfBMXp5MqG6Q21jVY6uKxsCddPRW3L9fGsi751zHnEQoa",
  "key18": "4gFyRYzfURJQkGBxt212ucsUS66TnY6eiT7sw5YVMHdqPXbfkcARwBsK4Jn41iVgsHVV7fE9Bpkq4eQ8Nqew25kP",
  "key19": "3ochGJ3SLnnN9LKFUp28CkbGfr4YzRCvMEzW8rdLiSS1opxDkLTWkKTK2cZCShzbf7pZEXy1J5VhpKwURAcZPXAs",
  "key20": "4sj7vGudWk2aBWyCcHLoDJQH4YnJ2xwxs5vi8RT3zcPWj1dU9XDdHPY5ePwB5xVwpi47Ja1SDNYEEDQo2SN1i5cC",
  "key21": "2isQWG4Gt7UoThne2KBrNk2VsqrwhH1x5168etWWx9noMzG2GNosfZHDaZPKHMM2y9Rv9t9NaL4aNmaxPa8JLC44",
  "key22": "JoAc7S78vTmZMJEYmWXGMq37cDPSiMcXezbMZV59bYaJ9sxPFimhbfF5ZE7DfZYe6PxkDkxESCB4UTkRBnTbMD2",
  "key23": "2bdBQzv8NQJ63JRV4dyaiJDEj243ETcXvRYFvo7WDgGxVuB3RMwWAebkJNs74EJ5fAoAc31Zn4RVxHw1pznWBzUQ",
  "key24": "m983VsGunhFwdWD2uQXLXoLBdNWR3i4aYpFUM53iWibymEyxgsMCEhXGQxZ5tWBJbg3UnvBLamPZN7pjWXkNZ37",
  "key25": "i1STtDkvgwF5zmxcjoG7LGSj6S2Z1czm5BtJVQcQKKbDKv9NmrPQvhiFYmcUUHShyisU3sTQKTpgEK2SYhHjmi1",
  "key26": "LF1t9XAJbRnQnMG3sB8gqMcCVf1bk4wf7K3x4UiNtEwdncTFcgaDqSG9xKbzzABcGYPCdwvnhBpMoqrWK8h4KNZ",
  "key27": "64b4B2watBXJ7EZMvfM3CPhMwugNf19UNC5f6jF4LcHPtKwUieDjYSxZr3jezedPPayoKfJiqU7MYscnSSHgcPQN",
  "key28": "4rh2FcP8A7sTQFcNyRE1FHFqZvjm5RRzpn6ZsLFhtLJnRUmPabPxbF8KJ2Q59R3WWnC2phCVJKK5z4od4b4uR7g9",
  "key29": "4HLNmsrvTfAudnwGafQdNpGN1p9isBJeRTGaMG1JJKDNjq6JJh1mSJFQiJLp4rHBSHe2CMqHdGnsXZuLKeeg5Nci",
  "key30": "33TtpwJUvHM6iPtXWQappi7vBCXDMg9Hhe1Fwq5omY66JzYXJUwfiUXmSNLbtEdzsQW7cerD74Wy51TqCJK1VARe"
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
