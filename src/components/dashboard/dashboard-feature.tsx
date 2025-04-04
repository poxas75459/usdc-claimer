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
    "3d3qtyGviRQzzRNcwC67BGL9SkKK3sGwk1s4XYZk1QUGcRhu9RGRM3sBiUicTnszsFm75L9Vcxq1cDPkXqe4mHZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mqJYD6LAzBLshmER7sL2FW5kXQ6ufe6RacJRBcYdbyjCCSZbFUFhg4UuUjmJXiWHb8doUck4yLGAfSJbaRhwL8H",
  "key1": "2dVXSqwTSWoyJkB9NoMjSxmZMJLciH5cqDk3o2xvL6UCRoEP7g3p9Pm6n9vPe1WmGJGMduVcEZ34vsobRSgtwiQ2",
  "key2": "5WHCG7Po15J97tUfQJZpyAcrUVdWqK3wXJfbjpaudjMBFdhUgXpJDkp9NW4FXwnEknws4jQxnMuQY3xwV1QBK8oR",
  "key3": "WJ62uab5CeLzaG6bvgh9yYZGaJwy8bpW8G6uSujdQcoz4RuU5Qh441VYvq3f4rCPffRzZzP43jFY9RuF7BWyCsA",
  "key4": "5TYp4e7ksrBbKhYah7hr7cLTBXrsBPmiKGiTTV9mvQuQiEdHEUnBh3Vqx6jHrqQxf34gXW8XgBbTKjGc2aKRdkPp",
  "key5": "4voKMDpwtbcupjaBUuZuVYd1YKVqWom7nai4ndXSJgpAieuMzVT25k15pf1yVcKwENjw2DyGum1icutjdVjTAWEG",
  "key6": "5BHh7urQiEpEVvTCZhAyTPFin5yVAEsGQBrH4cWtcTAF5crG9XxCu4waKaLE9iZGGHTU598KR8i2YaHWTkFwjE5L",
  "key7": "cudvgBy8UzDExv5K14JTXJapUWtV4X4QCTJCvpPosNxrnUT76feAX54Ysju3LZq28HdmTLv5gQY5nKhoZeCCuUX",
  "key8": "JyMMprmetcp3qf8zfG1KsX7geBZ355oQWbvZwY3oQUiWyNyB1n7EPaDSQ5f8UfPJF8jcgYu1RXRtpbtEJbNFFh5",
  "key9": "KEbixoS9kMxTZjX6xpucb6d79hTk9csQScH1qSN8DeccTcfRtginCyzxHanuuKroGmHLxQVbJfzwp8dSP1Ap5Vj",
  "key10": "443ny33VBgXU9xxHFsvnFN5S63GcM4xDSSqgrKdNYcXy1oRiDcE9oJGcXPpUQzQE29P7CgykWJiR5X1qzx4K8sMr",
  "key11": "5ps19hjYfnKFP4r8gaUtE7Tr74YW6bYjPBg7uwkAJ1sVMvVsGtnJivtqNVH7Buw2yJtTPkm5vFhGF2Uh3G29qMqe",
  "key12": "LWM37yRiBkeuL3b4yY3eKUP5Egna77yiKCcC8dDVf9qo79pNDLNKGA2VXBmNf3eKRSg3JxgdcZs3HXFJdLWZWWu",
  "key13": "HrBeYxmkQVFXRyCVBPR4FmmnmgK86kY8DVZFN69o2YmSaGbS8eFoWBjTiaTfCtw818GoxaLkDgwhtUfSrQT6oFi",
  "key14": "2gzHjqbmT6mzxSMJWpTSeBrLz8an99ckr6gUe2aYdftd5JYdKa5uPXKbEUZAqRE8hDQAHxCXzfKpuA3xwDmBVJdF",
  "key15": "r175T826sgXanioMq8oD7r2beJda4HeLFpvPGqN1HJZf8ZXwaCvfF1BsgaiW39KWbUaZNkR65P8UsM6R4k8CcrK",
  "key16": "2WFiC4EtWzgtPy8KyjCiKRRKCiE7YZQd4RL33ivdcFmy4LkmUmWZYqoKUscS8DLTY9wxBbwspcY6S26geHvc542m",
  "key17": "3r5PNb2yr7tdyTDVoyi18q6gAPF2z9wAvWe8yZ5mXAU3k3hLfS3bgu2dsMWrDzKqMjF9dWbRxdQ5GjLzLv6a7dUe",
  "key18": "5fwxi2EpHtwm17Q6F3TcMcX5vV4TK7Ucrbvi7xU73gKuLLxfMmmfksJesuYD9em8tTbaGn7A4rwUFGwc7fTbbe74",
  "key19": "2fxrXvC2qnkqArgv2ambqtVY1CLCwiZQct7mzDTdGBTpZYcEtndUtX9ShMoezqmMqvQ9eo9dFHsJuczFGNBu7Fm6",
  "key20": "4wTCJuj7SFdc8ScPs6HqxmXQNyHq3mtvfxRZUbDD3y8NcxNHTqHSAVNL68VTGQG943gTLnYgVtrDyzAvsmPwYR24",
  "key21": "8fUmmhkTZkAM1dcJ4RZ8suTgPQDPN4ArsbzjDdcmc8nbhuLG5XD53TYCveSxJdCbK9EEryGpE39rTKmRcAwiCxS",
  "key22": "3bdmxMomHmH4hxhJktZFuZYG8HtqtnRbtzGrY83aFFne1gYed2x4vHpbt81ZmhUWFfyBQSLx6zJfeE2zmLeX8jBQ",
  "key23": "3z1t1segGJrhwSDXwos3oyTY1cBbaaBjwuBQFnezPZ8W5crihzCGTknZz9Jkq54VD6EU7Sr9cdj62s8pnMbLpHRU",
  "key24": "52taukMk98kX2NeuuvjmH8v1eAnDAn2B2tLL8nwU1f37sm93gpxjmUhjrZaxHrjeYK7ijWyEr7czJHdTkxHQeCFD",
  "key25": "2oQYHsHq6SjNKzTBcZESxomgzsvFU69AFPxPVBMBSygoSzpy6FKmTiW1GcDVCZ33MFE8LJXnzEGkbaxirCMhwmQt",
  "key26": "4U5w2mespqZgBKNa7c5DtebHMop62z2vtUwpuVcvbsXiQf53A3zng2XNNZEBzrW3GfmsUpxej2CRfnUvkSCLrfng",
  "key27": "4gfiNnfzfCFoQpeDoYUtHPbkm98kXYxaMSdPsEAYzNSmeAidbHYAXswyCPnP275kSGMycETrcYiHJ6N1nzZFL5WL"
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
