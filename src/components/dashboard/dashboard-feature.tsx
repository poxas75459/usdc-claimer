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
    "cMWD6ATY5NEipksNbRPHEeFdGz26NG2KYFAeeDm3HUVyz3VtNXTh6f6ui7SJL6nsQr2hVBM2rga9VERCj1tuVRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KgADffhtTWVmcWMNdktMeHVN6EDi2VBK8YXjj5Ja8EaBAas5ws1w6PyDQEw5pj4AmErYbMK2YUozb662TFDuyec",
  "key1": "3k72ne1ED7ssEm4by1nXLohiTadyiSQ7PoqPw4DkysfmXCUyiM2Xyy9oBSRdF3vizqgqebbWNbWcUCJYYB799FgX",
  "key2": "3VzNvAgbazZfwivnjdNRD6FybfmqGrimvM2KYqqk4gocrRs5xaVH12QeSFnChKNBze8jmrUkbNRAjQojYi6uj4Va",
  "key3": "2RY3r1DQcigNrdSDBuTT7GQx4wVmzJ3uLeemrKoiYubd595Cy5NUUQsQEMiSCUsdyNNFedLp9aiWMiJLkuEiRKjy",
  "key4": "2bz4GqrWm23KWJMpxo6jbnZx1uDjzCi9cpHjQTnsbASny9UCUpqGemMyeNne6jJeSGZB2XLBrUkQkjLixUN4UBKU",
  "key5": "YJHKsDpdJoGM91Ei3L5DEfw7PGACeTMCnMNJrXnLsn5UPzWQfeXjS6nmADdef5qetohKfWie6rGHtJnHMpYNYVA",
  "key6": "2t2XpnHhBxxgSY7xnytg7WZTAv8JUGn2ED353iYGwqwBzEQUGzT8eX4tt2RXMoHB8vnRgCpuDrQQPodzNay9t6SP",
  "key7": "3KmrK3t1FTyFbuU9PKNYmzWcuwPatSDjtRAP9NDjWuvy5XpDMKgHVKaqqoGqpaBFicaSPEpnzVMAPSqXfnkbSAr3",
  "key8": "24gHabSX4Uz9QAwDx8jRmJToTnUT1VaDFpTL95k3ZjhUtQjcSacfvxNNwVe7zqwHuz22KDc1QftzcDncXpE4QcJS",
  "key9": "LucEx54ZsYowQm9SY724LM9AThXFouRbiupKVqsQHUJeGxPvnd6xutJS3hxGqfDSUeyNX2VHfLyFyn2axN6vH2C",
  "key10": "5Up51H7ey1ir2kHXbbEk5bdDyYtsSW5wX1LMGVZS8Q5Kg7tx4Ue7dYqHEpmdEcJLZyPevUmLjJQSVpWhqNbrVEa3",
  "key11": "2ebpE6o61Zgsq6pVL94fxbJUBNcZtUA4G77qo1dNzDAEdH4JmgDwFkVAvstJNyHxEY6RZ8tJfraiXTrK2XdUM2Po",
  "key12": "3JVFbfHqYC4fAMwCdBBhT3deDvQDoCrhTXC7NVwckbfpMzqFvE2BLo5P1mqUyJUc5s8fdPEUNFa3W85uSnxWTWxe",
  "key13": "2hZ1XpoN6y7Vo5vNyGhrGFzKhVL4etDtHQUxusj6RntP6zKRcKPVKRq7tPft6FbdnxQnNap36UdSZ5GNgB8EeLhY",
  "key14": "4VC5b88x8JVZ8HsJASki9XpEcKyKDgJXANHYunHPmXZKos43jhyFZLLvTWZ4kGDzU9sr2K8Q2oDGxjBrw1SrAWoP",
  "key15": "bXp2xpWWvAAdmwXP6iQbFfCoNJc6NyHja2tuE5CEWLMiD1tjKkRghrDpTNzHayjZdF16XXRNpFU8pKbxK3nRv7H",
  "key16": "4d55Zz9UbAQyJAfWTYVsAuHAW1SkqCszzLheCPVjJ9dGxLKtZNm2SHqjDRpkZ8yP46wtB68gawLH6X78Y5D9ktFC",
  "key17": "4tGQpQSurd86qoPCPuVYgqK39ZVwWd9Vg9SD5RemcCwCCFg1hmLEcoHLr8ZCnkrCT4x9jUkjGs8x1KYm2pP7RhnD",
  "key18": "ZzFhnwQdiBw3CTYR5B3a5W7SA96W2vWxNQiFqspALjXFZ1ShvrZYnBtrV1FkiNRjZqtVxn362uQSG1Lmzo1mHy6",
  "key19": "5Rmwawyap2vxVnWRhb7DZSYybZy79JdVFsuuxxRq69RGm7gVR4ZjGJkDqrJ4KNfXcUQU4u7NHv38gT5Ds2fs3NQk",
  "key20": "4fXraMmJ2iaCozqN1QBSX1YcFPBkf7p8cmfYRiHZXbsaaX4Wy8RLdU3EzGDUmpePreUquDsNsn9VLnsnSn9WDYAg",
  "key21": "333oeYnSUiJLaMg5J71g5MYXwSXN6mvPXCKEW3Pn9FMiyvbNeakmoFRbjDJhAYkhGtAMjDWG8TcNVQWgBXJ9SKNm",
  "key22": "3zB46fuv5ac9DSSKC4kB1mKitv99AiEiMvdEE5omrMpMnKNhFh7PZngBgyVLgVaA5iWUnHAcVVub242Uhn7srCK1",
  "key23": "57ukRtyduNzF6CoWcPUiv7vZfxPAbHY5zVSMDgkmjinNWNcQxywCV87qeLYtYG4eoJjqkP7QGGTP8NEyrZCnRcUR",
  "key24": "4Kg4B4pJD1Uo2CSQThBMXzB3QyF4tYhRh53BebkqogzoyV53ehrXroCfJG5vCadYG8oy6vKiSJLVwJCU7bAB3uTm",
  "key25": "5J85dFQ2peucFa89J5D7a2SXXeGCCKhq8xBYsnWL5T5mcjDrWqC7fyz8gteDzqkQ6kLMjGYF1hTNSeaNUojKnDaU",
  "key26": "4uYyh6kDUDbqySbkA1B7Kr2tSE1HtJ5mtoa11wDA6y3wGxxLsQTraUdZsWMVDeebq2aND8jfvQVcau29G1Z9mjuz"
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
