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
    "5SWWda8kjtNcv27y4p5RvhCYsAvnXgY9jvmy2Nk7U9xD26xfmWQ64Q6rWSjnLgqND6vcFHF3A2CWvVkod9vfUzsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vg2a3g1bf4RGGAXvfHmCuGHvMMscvSW1Fqww8inj5vdFmNCLbgREo1CvwAY4NgNtZktXc8ikPAVdYgZsk5DHFQA",
  "key1": "4YRyPbLEh8fAr57dESXqKAQfLDKsaUn3uQs9SkPGZsDNV26vNgccMEep4jXAwJjGo73xqEwZVdh98K4LhXdEoNh5",
  "key2": "CBVY8rAP7CWjePFS83Dg7ytfRjkaRqJHfxmJvrjAecCE8bKbqvqnpp1CuArtzYMJRsGmx9mit866WKke7YehCVH",
  "key3": "5rtTnh1zXKxnqfpqbGjfiy5RNV1X3cud7p1HcvhK22w7vcmgcXDhHn9GuUEBLUmPeskE4AznbwdgZ981AfAvxVgh",
  "key4": "3zy9HfDWFkDksUXYZbPMfm5SKXVzihHAr7ddnx7sKvYvhuLeRKxPREUxaMJiXWDt4nJ2PPTUfgcNZifQnFq8tA9D",
  "key5": "2o3jyoKfx6FhVuUFf9KCi3tQvXwyCRptbeChRpriTtyWYK1dpPD2vm3dXujVYxAa222ScYT5stvE8zFGL9DA9cQh",
  "key6": "4HgUKEV6ytbsbM2LPH9eDkRJwMXg98QARrmGZ33y7d5ENAMRCMe2c3h2gEvQuZbNEGe2sfMp9K8pvQ4tzZuB3BnG",
  "key7": "39uqoiWdeGs4GPCch2fZh2paTH2v9f83DpXWcsVqASeRy2qNSsCte7RwRJghMiaxWSeqSFe83RyC1VMDn5rrqWtA",
  "key8": "4VoHZ2XFXz4deNqCwps1BXmXxgQ9CQT7fs7hVCxBL6u1PDYWQwZkyRAKebuLGxe6v83SP3DHrubSAnyHih9YZ8J3",
  "key9": "2L4sDRKUqhYuytGSb1Fz8TMbxZtSEdUcSrCUsGtASJh4FbFFzW4FdB8126AVJE9tapqMmgeQAXWtwE6R4fbbiMkF",
  "key10": "7CsPaVzbHQyPiTucJRaJjr9UjtgkrcMfm7sxkZAAqUHFBbaqzJ5ZBLoDioZYqQPXsfDnyDUTvM2rzsDWCwqZMDN",
  "key11": "38mWsoqkXmmZ3gLQBKrWH22iBao2yZCHVqdiaY2SvjtY7uwd47E2aEhB29m1zUG4c9pqA86HN8UbPTatALN5cXgH",
  "key12": "4bW9xGN3sZLAgTEVnLKk6kGCobPjtusmRrA3duUaQZJAsnhn5aR1UhuDieg21dY5RfT62UdYEazDnjXvLoS36MsP",
  "key13": "dnKUEgtNyuPHMRcb8pmS9RA11gQGi3Fn3kx7nxd5Nfyw8B36QqUZtikE1R1VBjzuE7s7M3H41L5GXhj4MdQYqK1",
  "key14": "4gi7iRkzp7arkc1MJfUbVy4yMYQQaBxSHyguNuVjrTrhAXSeSBenvnyAYrVfKGXrmTGrdG23TCjQhY2tx1SqPnvy",
  "key15": "5gGgE3JoZ1ufHBAiikD3KM9UgPBw6YZ7cnjejnopmEFi5EgjDjhrXGszz3YJSV4evMryAk8XuxUUdkzk3cB4fNiQ",
  "key16": "wBrkWFptqKcodmQSkVnbRRSxJ5C9vTGCpfJQjMHwb6nHzMQhvLxfRAcQLeD9Fz2fDd8MDepQdRJk72zXyWARDYj",
  "key17": "3kgumtAgx2fTPydSxBPnadEYJvRgu2AdSoCWs4Fpn11WDMWL2A2JEGDwofxx3qjovnqDyMzaXGZAFyvGBG3cmmfL",
  "key18": "56WEvdgFdHdPYVYZX4Nbc4jJ76Vq1xVZEkYAmzskLbriHVM3pCpboqyHUwhA8NrroBzdNwnirEP64NyGg1GXWrrM",
  "key19": "2ACAdxk6CeYCYc6cMhQQgyccH5p1QoBYMagwm68D38yNLsNp9hF5fXDGUhmp4jf53WaD59vkJGcuabAkz8QtQ8Za",
  "key20": "2ddDiFo6fzz7StxJ5iVT8xn8UzcLHWAVG1c3Rtg8jouWFk9g9R9pypwkkn5bhdJY89i8rJrz3NPgTQSzB1CdiStp",
  "key21": "2N286E6QyH7k2Gb56ZBCpVBY8yANLonzwPjaYK4shfbQPcChPB77MNiz2JndVNA9aD9qG6XHAjfVDX1qTndujMJt",
  "key22": "2rqnWRLe877YLUpgw6uo6KLHgCKWWwudKCuKwVCEvk9YU9LAqpy2TSePRfj4eFKcd6TePvY5J3rhVQHeHF5u3ZDz",
  "key23": "f6jTdp7ZLsPVoUwjEXwzEoSHe8RwQX4ZsF4nFxMoNsg21D24m2RHyX2VMr5nHjGB4EBapa92YPpUPygqZUzPukG",
  "key24": "vgtPPSxpyDjNsu5m9axpUVdSwu565H8URY7LUXBZfQFNy58tzByrwQQZRKohm3iNWtBTcq8qi4bNoKVeinWgon8",
  "key25": "4jypt4uimLgewB6EeKi8ifsbBvtYm1oLT8cdgAcCKXW7eousWd4XEJuM2QhXPPk6uivm6kRFGV1TDW5nXyEo3K8H",
  "key26": "3sf7DjNweEEJVN12tSHFt6yWFiQqvMPYdyA6rmcdaGcPcNFqkKrS9QEwmudk2FFY3xjg3o8e5FxAKo86GQMRe3pC",
  "key27": "28RgUMEC4A7QqsRy6Hhurzc7U89zMB6eMsqyVEjHtEYi4a2DsPFPfC6TK4ybZFu3P8PD6vL1TKjR3hDekNVLw5W6",
  "key28": "XjdLhvU2YT1aZK2MfQpyuPG7LdnWgej4RDG5nkmiQngbR6bRqgQEysrbCWoaWetzrEiiHTk7nk99N646A5mPwVa",
  "key29": "3zusYg9Kp81Yz85YgjZXc3RrJg82AzmdxDnNrndcKsukNZey4TdGUJpt3fVH7EE5ACMiYki6AK5aTgiczauN5pHM"
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
