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
    "PDjwqERmKgHBrmzvxb3QyPVghhV8ThvKLPyk56YCTGAppSS1twEXkLmoEqYxnHEvodJasikQQQDbugN5ghweAmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aE9ARB2pKaCe2XgwFgSGWmp3wcBFqHaYP3cYwZtA4wt5kT6EyYDTDzWhiMnbAv9N7km65o2Nz6zSwyfcUXtg47s",
  "key1": "3GaM6AxJ6dPDW8FQnQCMMWTk1PGKrLrmu2ieKExKXQHiNEDvodipKnmJBQvZyV2fG6uqQ4PUDKDkrtMPUU6CxE2C",
  "key2": "2XyDK9GWbpPfW1e3KMPYvLQadxnzc4nnB66k9aKMuY8XKDPCT41HCvTEYgHx4V4DtAzzwCVxNezMtGx4M5qdz27U",
  "key3": "3WLGiwq8kWp2VA2uw2H3BJ81jzc3Q3fQ6U4q2JvnvWUpUYugw81xz6QTtCt2oSaVj1cU5t6Jik3hUp7dkbVbWWb6",
  "key4": "rZdbQoFQXTjGCe9HvJXAVRbkBtHcD8MVvJQGa9gWsrhW9aDcfCDKnp91jEgoWzkEoFnqCp3xthQBj14GA7Q693E",
  "key5": "EdXQVomLBqUzdmy1BrfQcw3TjXHCKy6zCJUhZA9UhaLikgbZMui46AMQWM28dwiaCt82XnJFQtEdAiHLL4fFJdp",
  "key6": "7kFjTiYGBymCae3wRezELJE7Rk1NRMPDPGErZahfMWQHaShCQm7XW5dFUUA1fLxMWFc78Bh95RoCUSqzRLZuFdW",
  "key7": "LqrKaEsYqq49LDxhPSF4QjRwWxLxsw3fqiB9M8ScVj9MfiBzqvL91oRFtfaZY9xQV4672tyDURH4ugDyfjYbwaC",
  "key8": "c5LwTuNLqhqy7NRYVEMBSnmu5mVy5x1VVnLQSnUzwqtDiVx8k7CucMtyrGAS8pnDa9zHsk7BadmoASZLzCfMuyD",
  "key9": "21TTv7Kxzvjjpn5rVEEE2DEuGBx9QSAm7L3iDWr1t7JSMuJDggNkSjRU6vJHpV2rsEshYWQy8w4vi9bDFFV5uAGj",
  "key10": "5k71TY328euCWrPCwD83ZwhCmy3kvpXVwqiPxxuedeG2K9fSVULLGyoMsVewoJegTcTid7E5bDeCNiPPivAfeahy",
  "key11": "4De5SJy1hzbMEgoPd6pdZAzYcryqPaGTjQcqBuZcPF7YfA6rPwat6ve14R2wksfnaUft2cB39ArHdsYLgvtpxwko",
  "key12": "8KEwCQrzpPAxwRE6TN3gpZ3Qthd1LKnaL7gxBdvkuyhvPDKNnW66kx3noXTQh2gPV9AFnj2L35i3ZXJ9NQs1DqE",
  "key13": "5E8qzKTUEAjtiuPL1iW2PUS6RWQpD8eWPFurXTHMq7PsjoCSeX1wtH8i8xZtx6EeVJKXL8K63kgtQPKtQctpHEHB",
  "key14": "52ANiTyGSMCv7gN4uzphkqXaLBBZTmW85pEZVf9mKXchfgqrQruk773fTj6xobFd6qsmWVYg9dfVBcHfjJBpKEGc",
  "key15": "3v8chpQBBZnn2NRcL83ytHxNCUcBGW1QtqNLNJMZpMbgw6JKJQ4e1i2VFX7MJu1HkSJC4Ufn2rxgLAaYcPbM6Ain",
  "key16": "2gKojg2J6LLVNeyKz5W8eLrVgXxBNmHMtcwZ78t9u85d54jEfEaQnWbuQR1Pr3AYhXaaCYTGnT3bXidEQHmXFPdQ",
  "key17": "618tZZj2D2KFP6VNz8MacYGZ3dm7jXeTdiPhmBiS5rpmJmUS4Zxs4Rd8t2u1uyquvui2ua6jbjpvAQHoLguCGfW3",
  "key18": "4Y6n5Hmbcihjtx8i861D6F8PhmnapDotxJEsAMRy2iTT2o3DQydke4aW7bH65vW4b6VCK4jAhADDDw3QNmvCfiHB",
  "key19": "U3DRBGPKfKjcN1S8Pp8g5qH1rPTUv56JWcaNbcBW95YbsJqaACWxQg3irQrHatA38hGxxNgbKoxvqJAvmkUqBsa",
  "key20": "2EM6J43J2QLndrB5NVGchcRPr3qoxDX3CrmFCKHVP4R9XQpC1qSUS6esbJXBzqRuTGy1Q1pDBip1Mkv4M5Wkebpm",
  "key21": "2NpKX4WdTurrcUhFGGusncbwXd2ciGmtk4fQ7YsjoSdstJhgDbbbTGEhNnbbMesAFr1VQmc8fRpDHBGsLC1sp6gg",
  "key22": "cdqPM2fwaAeFNM9LndFmvuHrYW7f9CbDEufwAwaoHN1GeiAMUfoh8K8rUxbcJ2oKcyjq2nMtRkuktGcxq6rwWCm",
  "key23": "5AbJ8ebKeWFsaZZ92mRWCKosjdaBkubVS2x63AksPJpj5JCA149AaWG4qRdcMHv6SveghNM2pxtKA2GPfWWdxTgp",
  "key24": "2pYdow2hKLoEqantTkbp49k57LtEEmr7Pq4rguTJeCPzSKvuwauiPGTJcxpwiezU8zdo3g4Td9b49RGWqJ3jHBHW"
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
