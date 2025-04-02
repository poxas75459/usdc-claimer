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
    "48faoZ5W5zPhih12R8u5yTDVB6XD2mArueyqozPrfxRvPUrngyxYyDEaaCUvRtnbAHtjA4R5H2kHELLgKebVmveV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MwYBsmMrDuZSFyvyqsC2XnTu1qucZNKLXjkWd48rmhQrdLpEtPmTw4hCUcURtGpWusVYFDNCPZyjqsx95iMNqoo",
  "key1": "5H9uCNjyeCaSyWmgQ3E8PPjx3zfAzsqSQiqREqfeRmNt5uEAujdrjvgPTjFwfifZa9xuTTnEbvk5Rnp2R1SrZTi6",
  "key2": "2pv9HbFpeaEBzXm9edd1jug3gFg5SdCarjpx4V62JjJRtQs6cgN4HRiCsvJaB5L1ce6j91FT1VedTxCVxQtGYXTh",
  "key3": "3HMDAq8bs5tjRBJdTh4fh7whk4wKGGyAiFMQ6x4qLJf6PkkFg85M4VHSeuV6swVxoJ9yhBBBA3ftNvvmogoutwdb",
  "key4": "62wDrkRHWCYdqq6NgL1wX8GfHGtKtEQYMSuqXVodDHZNEmNsx2YDGiNciU5hFeXQ1ZjV5ptEyK6jW6Jgk5mRLxFj",
  "key5": "49R49ssCkQaPfMdAhvzv2iBRk42P1mWehFJc8mvSwAUhtCV2dMBTTnAfTRBvHTBdGd2Un6LFn7QedtVEsoZZ38w1",
  "key6": "Pu57Ko2CmcK123nRFb5c5vrdirrhW91T5XEpuUL2Cd3pYL3vHax4JJ7Jy9qBZi7CYhYXoZeMQmkPpVGtks72bCC",
  "key7": "2eArNVp7wjL7dJXjQK4mvLm6aRrpGfcpNdZLYCFjpDXgHEiKQL3ZRCbBkPK5Ldj7j5Qy9FhXQpdL7BmBPcm83SP6",
  "key8": "2vWL5WwrUsVrNGTsCoV4CLLYa49jW3ZRXBrduCpWNPNgrBQSrTR679RiUPXQXNUsGxddxEXFBBMRsDF1CoU5qdTL",
  "key9": "5EcgLQRw37BLfXcyx5rerHxwDMDERzJ4wNvg4Cxjyji2DUu8P7eypvgPAgq3QMprPFKKgKgGpv6XsVHB5T48bTG2",
  "key10": "6194neNpqKiMMAG4MficnpkZGK9UEQa4kAfE7PuVJT3q95coTtPVC8kbr5RiGSp4MThjfirLspuNwg6DK3tZC8gp",
  "key11": "3naQCbuNhELge6sPmpGnm7HxV2eGoY71kotuSK1CsjHcYMjaMsLmqWghTsdr8FwtiEPTWhwcUvMHHdqPejUXU3Bo",
  "key12": "3ig16Xks3Jk5t18rTTrgwWzTUnPzRzBZQsuyEWUnTAptVKZoEBGhaqDR922zoMyDkXpvx6SPbgSWiSWYAeWPaYhT",
  "key13": "37fFVuCZFkAbaQvhzzE2pEGymyB1UbSDZjGuYP4BdQ2SGfRi2wwsgVMJXpZVWM6juzBfXuZpQiDwj5YLn1LH7cpE",
  "key14": "5eqdPob2wSPmExxGeKPd2eBYM1PGsQJwvNhjVkDTBdshGoCzMStWCdSgiM8EKNXzhLf61R4bE5Vy4f2sgAgBA2CQ",
  "key15": "5haMbQbjx4M7KCFzFP2FzTLrGagFKGZ5kALmGTWkJdAW9iZtEEZyEswRF1ySwGT1gRjiDAEUwFQSvUoi6UPFtiBb",
  "key16": "4hMms7DXi742r8mvVpsfyDFRsHowQTZn3hjZBbbC1DAxGjjruYc53xVUYFmZJz46nGib3xAFUcnjq5JgSGS7V2sc",
  "key17": "eDdwcyccP9m2fDkd43mqC6m4LNWHKjWvembqwnDDTonD3w5YMiJ1z5HEBQbF6qmJu6TwEZE3CvNEtXD1VB2XJVr",
  "key18": "4gxQ45SDq5XjtGZdEKGXyFPqV9xWVnj8JhNKKNcde5MvsyqMr1iiDJAgsksn1gDrXncWWXtUtk9vdL7pcXwo8kUG",
  "key19": "4ActWBGsWdmu96s6QwwmxHkqNmFdHyEPuhgdMYBWszmu7d6DLhS6bb5sJnzugRzoQvCnGZJKKttQZ2vJSCX2GGdu",
  "key20": "XzjvumkZzzmxX9ojSFFFgC5834nQpz4vkkksVWpaUPVvwN2juHgX1XyCmRRrXPpmEYg986EVW6muZqQ9EsTuhFF",
  "key21": "NKZX5oeUpZwYBQckSUd7cd1YiE2Afat2MDbUQsJPNyA3CkJJvbfc9Vh4cHYRCc15PfKmyHiNKCvf84RZ3EG9Lcg",
  "key22": "4t73cygzyKHHxxhtMe4ejFT7DGqbmxC2RNqBMCZsZdZoGm2eUE82rdbMnv493XtHsu8hrTY5WmyswkLAeZ75d71U",
  "key23": "5Sbypq1Cqvi7FEguWNs51ZrqF2hHp66ePLNq6tJi4Pwp25pYqRvA4jMArYcnsGva1e6QMztorFEgqnAUW4d9wmni",
  "key24": "2wnefZVNTRgBmTUusBRSykUHY6YwVRgWk63CMVXRQJcHepA77UDPFzriiytFPZoh1qMYzRZLnejfjt4igF8xhNSu"
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
