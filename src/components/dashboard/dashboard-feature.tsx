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
    "4nxpFVtMC3pbvr5guDZM7Wr2dn5LgMvfpGeZkz8Zf9YcEaScVCKv6bpDvUbzhxfZcrNzTXrZ9oemg7sz2s2Btfik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YtCQdL7K8Hs1FyAatQx6PoKcN2tD88JLGoyP95p16N2o4iVZNxWsNcduvF3iFm3e9iU3jmTotrnp3ZwVZay8wvv",
  "key1": "2vnjKrFSLGaS9DDDPXiDsHxaJEQikoiMEYvnCV2WjMELXjkZKoY15NeLWxYYQJJCAFqs6tPqaQYoCvTnXNvDY4T1",
  "key2": "55A7LPA5q79gMejhsHH2mD5yLavnb7ikYszRGJnbvbETfxtrFUJz6QxEZGizKhAxoExyvzRAkVprZZzy5iKawTht",
  "key3": "4YtNWxduxp77CTkjdGmYvd5HnXiUUuKCDwS3XAbiY79YR8x8sXpA6fHVbePxEEBwpnNiDdejv54oYo8QhFDFL3nw",
  "key4": "24vDaVyx3rpnY6MFuKwPanuDPsj9pLvzBZWTJKnCacqW2U3VDwj56imZWLXpsQtM8dnr3Kp3vCK112Ec7PS33Txu",
  "key5": "5jDqB489cbhU3ssNNN3LnTfcnrsg4jzcY4XF3B2HmEzDwPRsUF6MgJGM5spLYEju5QRwGjyf3rPpU2BdYj1PCTzh",
  "key6": "63mzughTN1TmZG7nCt5QPQy3ePRqvGjKo4mTjMezHcoJwQdwggx7XWEZtqymuJ2cs8jtVwcf45WrhHyRXqyZuXd7",
  "key7": "4fFuGxZvbLu396Bqsuumak269jcvNCC5Zuq5z8fJeFo9vWe7J9Jtn2BqFUuG1tJKdmWUf4D4Pdaqq58fA71Rf99E",
  "key8": "4Jp73TW8RS8Rn4YHBgNfnzt5pc1KbbSyzRabPU17ZRosSUBx9srCeR3ocphRU8go8AybRmJTMwKnk1bLHhpU5WY7",
  "key9": "2SMS7PQG5MHBmPyGKggZXhN9maMQssmzA8t5kLgYyL7rjHCRzB6AZWfDfJcuEy8rbbtcka1h3rQdgEspEMWo81ey",
  "key10": "4VXGm4Abec3Bb5wgwHcezXyxgkuJy2HLFf9khiCmgSCFcBiJYyzgHGY2e9cCWovpu9rTWDNp2g9Ed8Txvfqdr1Sh",
  "key11": "5cGKhxGiCc73HSmWSHZaJ9hmN1ZLBWTCNuLKEpUz8sKP24Ar4FPZr3Aq1hK6iXzbR1svvDQCXRRhV4NaTGWfjyb5",
  "key12": "V4UPrJhkFgktkUEwwUNgdcwcvMVXgxHgs3SNdJRN9Htwa17c1iQW3mMExFUEx1e8VMUYTMGweRMaWj2RibweSUU",
  "key13": "Ju95GxKXFADuBvY6LiQExZLSWR7txuAQqyXX1KyCY7Jep7nrLiTDWeXnmmv4ta66EdhAb8EfAN9mLCXjJLQLunc",
  "key14": "vZMrYTM972USCkHq2LiLKhaAxAfz3DUCXb1vgiP8hivBaffCkcHtJxdNdd6wsedhr9KJLAguJHcoGpNPToXQ1hn",
  "key15": "3EiECQkeYZtZ3RZ6EZeLX76HLcDZiJfTPT4oYGXNZzqMp4ziGkuzMjv5kugkarXxmc77T63DpgEUTVchgK3KtoUz",
  "key16": "2dahZqZ9LLhozu99rvEbBi4py34hR495uTKSShLzkYetEpBditoAFi2y6NC4e77fn1xb1JHSYD1NtBNwz2nt7SCb",
  "key17": "5vKx7h9PQC1fD2GPfro8tC36seFeUup4qNaRLkYPDqmhEqobcDJSGjvn5LUShRSbpnnDi3UXWMzhR2u3GtXt2CS1",
  "key18": "5oMADotA46TzK4ZDT6WF5RopWHpApy9bBBsCznjMSgjQ6tHjBRsgDDUhKPi4aLCaLSKvCVrNgrL1PqJ2MqPm8ts1",
  "key19": "2JZpDYzuZ674JZYnkmr9Rqm5bQXaHYPUk2GRCUsk3aT3XKHpsX82d3t4WtXCe15TTbQV7yVicmpAUb2wNwyLCnwm",
  "key20": "4EALubrroCmpm2Ug5hu6s7CV1Et87YBX5vkg4yZ7UrcNUNGEVkX22MF7N2FzujPDPuJiCGqbVKNyKunFuj22LUGn",
  "key21": "2giMo3EzVZSt57HVNKGjbzkdvkTTjqWgyMpaYy3BDDf77vGxMeLWs1QxCa9qPsKBCvvPxyfY4CK1WX8XwxrYPSnL",
  "key22": "4fB3J5qGHv1udvNEZH4vvzUP8TApPENCmvYKKWwUZRSoREsPaD1aG3Fo7wosrPcFx5D1suwwKzSRdQmFfvDyuf2b",
  "key23": "45vRFRgxe3jud5e6tini6z47AMj7fpLVBLbFQuBhoEzZpb5aFGyzwfEShhR6YXvbnGbMMUPJwfBKQSGSy7oP2Qah",
  "key24": "2aYk8fZzeQ58UbakgAfPF3xwHmwTwXt5SYQEfKDPnY4ht3oRw5wqHpJGSvPwnZGunEUnsVJS45io9bfhh7qM8SVv",
  "key25": "4yWRP2vhmKb2HoWYKYoop7Apzfj51LfgBmeKa6GQkpeNVUAw83AhGpMAQroTnfpnRHDYidLw1bFpb7TXXPTeBJAU",
  "key26": "4zkoWLF4L5RQW3xUFdvznPAnnbPSg2RyXbcHcgDVPFasrgqAEU8anN39Ls9fpG6T3Y1nodKrdTzU3oK5i2Bs6v4A",
  "key27": "4WQzzNcnGw5h14s4rmEbc61GZ1EasDQPANEiSZiVZpHX6WU5vPfJVx6SwZ3U1zkocSpRmztkjThiSq75A5g6V65Q",
  "key28": "3dvSDo6x1nLTU9goxt7neYerhTzNjNVcXZCLKztCFpCrAmvgcVVhBsF5ExP14x9UCSErTXatSJ71DBdZgZRGmZ6p",
  "key29": "2ZRKDBLBasUhMkHpUD3D1c1k5Mqxd5obpKNqKEcnVdBSij1LzYw67vRFdGuNyoYHWXmTYCP472NrjWQ8UZRv8Aa9",
  "key30": "4As8nqdjq8Db9CJnDsFd1MKbLnPi89cZoiRz1oGGUyN6hTLSxZyaqCziFNfR8GfTjscNxrZNFsU4Bh6w8oy8wyz5"
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
