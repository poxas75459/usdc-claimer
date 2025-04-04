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
    "3mjfvS5A3LbBabgxwkNxPvxWPMtDF2nABFYENGgtPXC1Ez59fLLe7VZLqzMY6qFy3iGfZczzeaSpQhZScAGKotwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hj9XbssTLj7VF3MfdRkBUbpnE5ynV1QpXKieQfc48Zn2KXbFngVNpdBkYSBUqXF8Luw2RLteHD4idN6QxtcUmXJ",
  "key1": "TyPfqHFPPC3eFB44MpbdnAa1mqNbMhVhj9RXdvNKfJ6jAfAa8agKfSxxeBeZjkcttHTaZFpWPA2eLDThk9fB9ie",
  "key2": "21uL4Waj6Q57TqPBBSiHkzmyUv6eVUN6gjo3VmJqRuqVdBW8Ro51FUD9JEDSeWgSzLS7QKqbiEuGejwzFPqgsqSz",
  "key3": "3EkvHxk7w1THEEwR3DndyxbTZdWFkwfKdpsGUSe14d2W38Ew3m5j8MPAz1iHLULX71zA5ebiy4dzy8P5CHuUooWZ",
  "key4": "mA3vm4ZVgeZuaGnHJuBtwN1DpCG8zjvKhYT2wviebn3V3goLFR95jj5iYL5FRcqeSFsVJn6ekn9nBwvFHQjDZmz",
  "key5": "4ta7ko9W9yenwK5bLjnrfp2CH3ufNmyFGxiqTu2eyPm69nnTD1LekKVF9TNoicWw8pT8pcPi8j3Fm5m8GK2Kb8tS",
  "key6": "5cWzTSSKrHw8sScoJSvPnCoFLPQdJJHNYyjm4sKXS5wTY9AHvvZK7rdQMXmXU1NqK33LUxU48Wu3Ug2PoUbfVRfS",
  "key7": "5jAnGohqh3D1QWBXkefvaRdURbRzsKCY3B23YJKmS8TQmfbaanx8yUzxPr5A14mLhEewvHrxBi9xHNneGRgK7Udv",
  "key8": "5ksSLKwU9rSEtwhXgakoxn3n3xQ6QfJn3XrBeVRZ12eMk6xxtSdYPMmsrqtu6JVDZJqRikeRPb2bBfo6vFaTQuK8",
  "key9": "5KFj683tR1LVBAaTwcEo4nMhS6M8hLSRfwZBmRee2dtwH61sGUhaPc45gDHJEnPjEVYHgS2tbjwhBdHe3KFG1nRP",
  "key10": "2HE8FoWyyYPTGj8tTeCnyngBZxWpUB5Y92nTFssgPzuhikqvXBEGYHMCoosUVfv8FPyPhyWL1zpBCnUtGQhC1XUU",
  "key11": "3NnjkdnKACvtbep2h1NXvRDp4HcgQkf6PgQ8QXGfAhxaGj9QWWzG4gXzYqdL9bGYvsZHygn2PJrf9DVR7wYJrKh",
  "key12": "4RqZTKr5sb7SFmsFwYdNfSUJJsN7RsBWFAyRdo57ot5zV36a8sBAeL3W4jFzfVqVmdA4KestzST2bJCFXNxJV8Qk",
  "key13": "UyVuUNqarKoZqT74sdHZCTBA9a3g7sHJqsapgDMVnS6Q8H2p92utUxTG18i5csq8kmoWHKj4fjCeXT4U9VBPB6f",
  "key14": "4Lyub8zgSUKpbsfXjc5Za5dpgXhkCMfUNBvQLRdkk87HJhK22Av2yVqyRwGWtU5TUNZPF9iyNvJAkV9ZxcL8yS2H",
  "key15": "2X9CmH6YMf22w8MPiKFeFNs31PAYUMRetFBCLqiVpgFSC7j3XgxYzsxMPwnzPp4AGEtrsu5ZNHFTUG7Eepgp8WN7",
  "key16": "41oQZzcWx7Ko9kuXkB5xTVxiMwuRo41uZ4gmsKEXd4DiyVVsFNieeqjh2ixHTF9WWewCTQQBG3HQNSaYEQ2GCAYK",
  "key17": "2sJipsqDMworVvFeYCJ3pZhKjyv1JSMVh6SFC8C7hRMaWVo5Ry2FkdridsPbZKHtV74LedwLdoNa9BcEqt3uKu3a",
  "key18": "EyFtHTPf46ie8C6QhAAvBLshNLWQqZEY3xNKVwj4gVJr2pmRk5dZuVvadPSKtfkJEzNAZxAYxRL6JnHmJkNn7ZT",
  "key19": "4CXrNCFig5JMr2i3JMnQpdnQWeSHmFzBBnscEFnyVawnGoKxkPWdBoLvSJYGqkraNLoo96DLK1ZCCJLEpCvejNqj",
  "key20": "5RZw1Bi2M8eMWhrEtYCRfXys11Lg3bGSfEPzDUzLW9yfwzNCe4FVmGvfQRVvjKpemKKqX6EUTtYSNoKgUrRGcabt",
  "key21": "BDc56wyFgowzE9vPNySyLFvo5qFjxJ5YtNkZCGPmmjck7hqGPGeg3maUj8ehrFKu8rPHoKHAEC9cudfH3SqdTXq",
  "key22": "4psjeJj3E4s7ojYmqnc5SjxMWuYAyVSAEyqGR8VQjreN4PiP7KoK74V2SWyFjnDDtMDfLJoAN5ecV335ApaG4SXe",
  "key23": "26xbLxRr2CdWdKtvBMbs3p1YBTAYMgcGSpUkg4FRcby24cYTQXHPUpMx5dbhcJofbVhF8YCJy5BhV9rRkqk11Dfb",
  "key24": "48woMSdxJPSqSoTCkcHy8WDDePv8AnnFcw9d4CXKcupwTSAfZknAoMaRkfVrnvxqCU8QgK6DGwKH6C5EXu5kiv6S",
  "key25": "2SbBoLq9FoSL1AKEUWtw2XE45FW3md5K1mri8mgbhycB2HsTojrPaqPuBZVScH3iUtBUWu29bHby4dsNFhnGqhJZ"
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
