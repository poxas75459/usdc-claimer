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
    "2EVXQwumzNyeGJvQFJB5ogDVofCb7TUBBMHURfH38w46xPbsBBoEKDKcKZBQbx38hhp594Mw7uSTaZC2PDwahCAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tA1VKG7QBw6huv4RSXoUvPKuMKZRL7Nn675XpojVZDrtsykguiRuJ1ybCWcWH5u9My7PcXpoz9cpMQrK8NdgtNc",
  "key1": "318MtNEdstFQ9bpKavyy3ADBFSwxqMvUvs8ctoTFjeZYCRMmV9FycjZz5Q4aLtpqpEfJakCxzjwvHMrQXgH2eTup",
  "key2": "46cE93buWeC4utca1Ckx49C4bfnAeVfR2iRwNyq72s8dXFGPoUnztzYnaS8CXUg13ejaWbWSFAFnoNcyPYDUJeQp",
  "key3": "3ytQZtpkqo3oXLvfg7qpvfxwFvifkQDPkXKFq4fz7um1dtkmPRtnFr2ieqRUPETv21FjbpfDFfvr9mrmrremnKLT",
  "key4": "4WxDq2HwDx3qCakfXvL1q19Ld6nuLP8mwHLF9tZxfM8yEcPwtshMK9siQjLPQNbU4EAPa5gNKMnPJz84yoNs5VUD",
  "key5": "2nEp1Ap1iGtkbqNV12C1qMixcfHu9DYJbz4hRBfXVHJZKbsbYz5hw2Y8Qw6ERsLEUm6yMvcZe8QHtyP3NE1gDJeG",
  "key6": "5CN6Ba9Cq2mJ6T29P5bSkQrKxercxvNmxjMGRfFGuZrQN9HGByc4v1xeLieYGm7raumcMggAA9VaYJS8DPBo5DW5",
  "key7": "2Git3jRa6Nejqgf7wav8GVHTmnn5HHTQKQ14v9VGYrdEMDni7zUAZkxBKddQtqNCsFRFBakcHspUygdRLDFdN1ns",
  "key8": "4hySCyfqDab3kJyFkerCaM617bRJvuTRKHsY6gxtg7TokLBfedFBzod7vnq4PdKi2Gg4WG5A7pubpX5uVec5oKzN",
  "key9": "25aZxzkfCViBcfiRt5p6EtgpX4BeUajzDJrKMZ7CmDS2z76KNDNXWsKTdv2XApMXVa5w4YSu6HVXvjPSMndmbBjH",
  "key10": "41ZbvNzM7Q87UCDYiPPHxLfNPmYrA1dVwfq9sDsYBD9sMy6KDJQPKi14Pj5YmxCdUPGAgB2a9CuC9imU2U7PHDg",
  "key11": "51QERkyeVcDrdtm7dakYn9PhjzUQrs81c4SLVrXquCVmBMtmyWfo3NNuKED7Gj9wzrAJqE9Zsbcmg97CA7UbNgc9",
  "key12": "3yCTpyWUFEw83PS6JrmER7bSnq1kydtfP6V1XzCWMF39Q2DgjK7tjwzUo22wgTpprx9VF5vfcqFDC22eCtM2CWJD",
  "key13": "5q3fzgS3pJvhGeYbqPxor8HNrwqRZ2fkGwp9YaxKniM7nfnjaFKy9fZxppmwGfeHRqcPCsHXbbPQMAew68SFyc9L",
  "key14": "52wm2aDvrG6aEvK7tZgmuEkEmaJNcYBENqhqFJx4UssexMjeQ6jwYo6oWzhhrehfVoVfokeMDEbmNiNeYuv6aeRG",
  "key15": "2CZTGtziyMW9aSCdfY3nepVsStjeoiVgfdqks4zYj54i45zpvmq5FK1MYZvWnkrZJ2wJyBad7b7AAzd45zspiHJ1",
  "key16": "49fX99TDzUZTRE25fddevqj1R5txzJyDypPH5KFW7J4RpTQb5VQ6TVbcc7d8vjHjt1xUS6knb7qSHHhLPbqgHwvc",
  "key17": "4SKCcjTQ7iAwaBiZFZcYKr7Wv4UBMYFm9RbDVkpJBAhirb11u3JKWuB5sgwod5oFtTaYK6btTf136PmtD7A7p8AP",
  "key18": "5hxVjtoHbZGGWBwD2CZinpWJKVeTboAuugrNoB9htS1McKraxQJWJnaR1CcsCG7hqHz84r24AkFCsZrHVLyPaXSN",
  "key19": "iVBcMpa7XiKipoStx66aQi7zvzRfPvHzS9Vux7wBhyUBntZW9P6bcMfaHSPkkwoXLq6Ybsr7UmZvgsTF4hHgSfD",
  "key20": "23Gf96CfwSPsNauTp4RishmjsKjPmktZ5BugjiyT3kFPigscxjYDfJZWaBfs8iGvZ2WTKN4ukzXLHinFFPx2PYJ9",
  "key21": "9JtLa9PNzntSog4fQpZ6YxbAbeNNg3x6Zt931PwzVVne4iQy61fUD2HytaHFtGomGSdBTZGbSDkqJAjgu4XdUi5",
  "key22": "2eWZaNfACskiAebMhUJFj2VmFidggPwVc8MaHNWxR6BHtaD8nZWvBRnumaiLXWT4BqWLEmidGQfoGzUQWrBfjYDN",
  "key23": "2uebY7UEtRJkjBr8UftjqUfieHncKRd57nBEcKo893Ag2z6JnniuksezGwJzYknZyafEJerPefchWUcdSENxGGQV",
  "key24": "TRhsBSKSC8QN1Ss8aHVPtFnLeoRCCR4vf16i2u7R3fPS4HhsumfNx1AActPaZj3zyBXedH4V7XAWVGnxQuR918M",
  "key25": "MALxEVgSQxtTLThcKiBAcdmBNJxBWj9bL3LmU6sCdnyBzfFhEJr7LFbyNgo87NqS1v5ybscMwupcTHn6F7uXDs7"
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
