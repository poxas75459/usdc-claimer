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
    "3FUbgE8kPoCeZnFRUgT1BG97zWpx3dXbnrPfPsCYgnZWi1258bC5hdadsLSZm7dciihR5uPJ88iXrS9mXNqsCdGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ASScTaJfQB1UnsN4qWXQmMj237CMatQx37SXadSBJuNMcxVipVAfPJWnUi7GNwVkPWsFGUr4CvPGhtpM2WoqWy",
  "key1": "Ti8b64hP6TUwn7J3Xt5hqRpCWj6PeueLmoAmF9WG6RsEACd9UxvaUXdCRcKbqjhB25jkHDFg8xaxXVvmASpnaj9",
  "key2": "Z8CbHZfkRV1XHE1N9jRPRnZsHMqVRfX9JxGvuWY8HeFaAVZ3XjTrdBC4oReSFgmxT14h6FvzPpn5BeHPsMVHRjF",
  "key3": "2NptqVzSzeFbWPu4eWmutjiAbvahWnnq9vv2s3GrP67K9A6k7p4APEmfoywoRu18GrmZbX1aPp59NrsafdNrptjF",
  "key4": "39wyLPb3p15KaoZZwQ25mKhxrxWZjbRDYJWWVBVDPk1GuPEUd7L8SE9YweNJg23hhP83jKFCL3jdHwAVkze6Goqz",
  "key5": "N8Pcame4rVqa9DkyruJsoL5uXajNivQ1ya7YkMph88nxCd9G168TMRS59Co57YGc3AvSPRrNTHVZYVPrbcPv8uZ",
  "key6": "4jvRNvkd7VGn4HBM8MCi3rAZeoww4vNzodhAw5vukyFt3zBXggQ7hr5Hw3ga9ne93h7m6PMT7xLcqxvo9pUiQ6kr",
  "key7": "4kt69dg6E57ZTKpXmV4WykGoai2NmpGDUVUJm7ticbGoJ5zZHdCRFbpKFRYhP71LRDNb9C2PzoSfTKnHUHxkTCoE",
  "key8": "2dJTBBKbJch7gbMAx6bHyEa8cja2z8WaRyaSgq4HXg9KrhqHk1gdwydXqR6oPwhNJtzxG2AZTTCxp3Y63XTZP5RB",
  "key9": "3DNfLagytBUrWoS2Z92NkKKdxNtBYsHrgyD7SZuwmUQTe2bCvChL3YbqXQxyiUWrCRQkeFoTakW5Hva6cTMj7HHL",
  "key10": "5DeS3RBXKjcatuh89frFr7aT5fyDKi7cPajbSaSHkpRJiiK1HpwyY2ZC9RMcAA3j9waVX792J9BTP7uFSAtWUdjR",
  "key11": "Gha32e39zbsCnJLMJ9DFMmR3PeXHb3oej6e4uhUB6EiRexKabYA3j6CFms2ywXkQVd9U1XwFhCiXmchWDz7eE4r",
  "key12": "3sTWLuz23uGXgzfGZgv5hpr9EaN42p1rKGPKVDSqpEwUzGTW6miB9GriPsxkAsQ67apKwkfiw7Eukff7diNbkAvD",
  "key13": "5DvSxyebjQrjqFNr1SWDE89nnGVynzcmgWPLTP45AcJXPrB2wLBHA3oQWuWjXwC1bWouUEUo3B97sQBCJAxAJx9t",
  "key14": "4K1KUDCZsB52bdeByTB776W6ea9GndDZAcRFArgoubU2CDSNhnwoiWLug6xNptQ667zAYJQ9KEboyF5SBpCSaDPu",
  "key15": "2hMqpRLzXekZ47uM5y6CAa7QgouW5i6P3a2pdJpNgjNDYjFXLxBxn5sm8QbihbduhaoVZW1L8aJoNL9ptVgA7oGc",
  "key16": "43Gz34kD9HtkUJ56tyAZRmgLL6WJorSgg3UcY5DqnnsNxnbYFywn914dL2d4kaSggxRRuMPKASc9jv3dMe5SvxGN",
  "key17": "axcRWBE1Pohs3zqem5ecsVj3bQMRLmHpzfzEUKDPem4pdYN5dJcqozFWHExmZuTGyHyh4959qKqecFm1ZKTZtwa",
  "key18": "2w91nZ9MGfHBcwHRWBKcjnryjJcgsijF4ou7LmHZep62m8faH34W3SZ9UYJtoqjMuWWdmAX5HWrkTMmBtN8d9p4X",
  "key19": "3g6MZxoYT63spsBfc1khYFJZqxcRqRPUvi1YHCcMgPY8TqLjYbTokQdfixeLxvhnheM25Q8U7tMyTpUZPNa5LfLp",
  "key20": "4pprXW97aVCkFbQdvbsTsPjS1T86xBUPK8D8RNU62chokJ74TAfvXztGL9Dc6zvNUFAsE4pnR9fyEACFgDocGWro",
  "key21": "34pm2RnC7FwfmRyDu4y5J3jW5cqJHQprQrsU5wwMngYgmkbuZ4UniK4ygEpD2XXr1Yy57DwAzvomKYjukJrhatLU",
  "key22": "5rZLJY1gwFv5cBK4onS3RwSMREUSF1B373Y8sBCQuv2kLyzmzNQBCQ8YewWvp6aAqM6BrhjwxwCZK1MLX4244ejg",
  "key23": "2oAEvn7YKgKNmtXMRwystd8yoyviKjsUGZ8Tkc8NJMsjBqtCCfqA6iM6SKSSiVSJ1gXfv8GDqqU7V1bLwWk6QSdu",
  "key24": "2CCDqfMFpKAauGfgioxQwAWQmnFjEhKi2aZQi2qQapho8ud6qnje1mePyh2C2nGfq5P6M7DLaaEfT2gevWd5BgaM"
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
