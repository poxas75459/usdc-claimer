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
    "28EsQsh3JdjmquMkMswm5pe7NTPxdHD9iEVNAEh5vGSsnAjaT9g8tzLS7RoTPNZmFTnuHfVaXt3Tit3umvU7iWso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UmVxo2BH7QWvjuXi4vtVa9QKhUDcyV8QPNTMbU2cyNBAB6WViQxRdcoEwLyevui79AKCxiCtWJ7jfsvc41FFBi7",
  "key1": "5VjqPViHC2U5UksTdGnTBhzXZhnPALAosJUvBsJ9jznYfFTMzq9GktM5ULM6jwV4NoHwwdYKqTYMHq82798TJDbw",
  "key2": "4KVwvMYtkpdbg5cJA7WCHAHaqhcaGu6ZgJumypkn9QswHTEJkhyfac3wziRWCVrds5xo2G2WEooDbUk4w2R7zrJS",
  "key3": "26UVrZnTLZGQnX3ZqCPLnZTWjirdmxGRTjyxPS3YfiDQr9yAZMqksMN8yV6vcpuCnqyXjPdrreoL7EqPRtdxvmjQ",
  "key4": "FXMBV6iK2zkJuZt98xvBt4KvMtRq4c1zj36U6bzeKWLDLMLEAj4VSiEBcGyiYR7hCYiEco7maGPtEmZRfQXyMzf",
  "key5": "2sAm8dX984RntjNexspy4nJBW4ZLBUz2UQ1hoTacigwdfytCZAmG3kYrNTtHMUHqkJ9MK6gz73RjbsHPSuzk6oGg",
  "key6": "2Us1L2f1ZXNVsmVvWSwT2SwSs32aNVJVDMX6kCm2F634Qo3zmcPPqdhUU4NsC5LNB9yqqgtYMNY3pRaHTWj4pZ2M",
  "key7": "2ymgGGnxhGvpPiizAUFtej4Z96W16ucCZkvXdGG79Z3EjYnphe5pfANaPUQmJe4Ri4Ub2xE96NErY9pVWbamQqNS",
  "key8": "4jicYAyrmU6ne4BgsURdKEerfLZXrdMKaQHY8DpnDyS8AVip4xU3XdVLTppD25GRXCi5pUmopj4fkUU8xJqB346t",
  "key9": "5ZJKFvpot9vmPxdSYzCbAUxqfLSEv3hR9eFQMJPcxQMdjnitfsCcYsAREfgDov7v6VgBTukSMrh9KeioEkVynJBP",
  "key10": "3jnw2PRYetD1RFaaZZYsi5WiaSfXpSngxopNxV96DMHE6eHFULHMZCoEPF2kaydjr7bTnrV26ysq81FH6Bwt5eq6",
  "key11": "5EZjPMxvP4ouY7uEiXJrUoTvWXmYDQz8WPQ6mAqDz1qKKeLYS1VtxrthgnHwg2pDFEZ7tB3wQn9uRz8knBzHUCkw",
  "key12": "5CyWBh197AVC4hhcTjnnxdCJdmB39XUZWiUihPjswTf2HaMLFfZ1CLmFyMkyf7KgH6S5r6NegsbmFEmDHaDKBkKC",
  "key13": "5HYifnrW1ywv1LVuQ9q6UpCC88qoHyPkwdYLPw51JnLhSG95xn9T9uGDep4US2zn2jNe8jgv9gWohqpD1uCwCJL2",
  "key14": "5KvHfw9R4XXJJK9GuDGDmmAGkFsyRJxe81b14JGz59Lsvahmz3czYPtB3jAFo9s7JZkXjffMyYXeiQJgFnfwKXRN",
  "key15": "2Q1fZxGnVLr7LA8jTxwVLsgBiQNQHRhEZQmEDLihWczE9nRvmzLdsjVq9gQSaZmAHBWuLX1V1DnrQUYZoLhzAK2V",
  "key16": "5bjgpheKHdUQpWaVmdEBGjM4NJL2karwN2mkg1CJc1Uf5Xd2WZkVoDbuMDkixsbqjeyHFZ87Vugw7ARhzybbsxZD",
  "key17": "5tBBqQRWCRzpd47KvMF3g5J16g4cqdAgZ3u9fkaULKDGndwUEZztkhwPP5h22TarA2fmyGCWUobxhH2cYqnN3PF2",
  "key18": "4CAUtogmpGgkv3ZzvagHGFvCQCvReEx6EsTxP83WsRGYgTYEkedwvkzFBsWS567E9piWL5vbTdG3A3Ak3dCsnqFL",
  "key19": "26x9MMsYZNTqgH8ro7xWKiHHJQ6niHu9onpnYwDkNFyozNY79EZkaeosZ4G5Vvxi1LbMnNmfcGc6wiW7cskexyi7",
  "key20": "3GjUPKSeBPkmaaSJ7FEW6QiCTsCQyaJEmKUCCbw6umEiVpvGcbd896o6DDnmh4tnCq1Fn34UqYQe3qcatXt8CdBo",
  "key21": "2wjhuugmgRFyWEhcS9bzHpBaYV3P5z5tW8EfZPp44pPCNry1rZnLhLuah9kCAGiT6KHJz3CAo52uLtLna2JPv4j6",
  "key22": "2gYadHhHRu7HFWwavSaPYQfrCkJseSyQbJrAbkUhMYDv2oX4H4bmt8WeX6Jsb54k9dyfgB2Lu6XaD51vUeBjWqC8",
  "key23": "wRa1YakBZfKcGT88TEKRynVngZfwDsGJvNQ1ZXNLWyiRMvHUNmecECJM1EPYcBhiomx2K4wbPYq6sN331gBHt8Q",
  "key24": "5MQBhUUByda6gx56th7NkDMaHTtPMWrtSH9aiUAtKL1zyYjzFxQt4qQu5Nv9i2GqyqsxAkDuczipovnEr7NTHn1m",
  "key25": "5RT8GGFavxf7wxd83SXH8NG2Dd7Wgm7MpAwE8fFeSpuGyzthFknaqsc5zRHmDF3DVx5doBWKi3KeEFGt5G9JshEd",
  "key26": "5Nmo36e2xWN8e1pVSZDMy4E3CbgcgT7nkbRbsg2iLCBbW4hMcjZ8sVLbhnHXPRgr81rWfLDbE8SF2EXtforPg9bx"
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
