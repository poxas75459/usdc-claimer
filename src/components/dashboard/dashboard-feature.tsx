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
    "B12A9xEfUJANyurDJEnpv2yQftAerkeiADMGSwuHc3bGRFAAJo394dyQQ6r6Vnd2BgJ5UoSrTuSYPXnDvhTUtYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kg9gZGSTLsT1uEaxEYoq2nqmTWioRDSVjQUZxmURFs4zK1KEWC6DeoF1xpxE6SnydagDYE1WYaFRyJ9M59gHGnT",
  "key1": "4jNwqq2RuGhrX3x9yhyKsxPiRthgDALbhAk1TtYWHULDjN9uFdADiAzyNHqm5xGKVqrbGA9DZogNjeWo5WoUStiJ",
  "key2": "3pAGXAnFhUAGEkpWKVUSMAKXcNjeX9wv9ptRmcCu65EM52Z3RBie9RJZ6usqtagz36crvSPNjLP8C4boTNHsfFzL",
  "key3": "49EL7kdEYavF9Cs74k8M7AqbbKFuq83QcghQ8cvik5kck6ziF54Ffw7kakwPbEd7eAqtFxuDT83J7MmULE7EN98W",
  "key4": "3HVXMuFtkju477XdmJduFBoxGCnvuwnJst42zMZKXUTsHqtzBuHJejVYNoLna658cRRFCvTRwtRteYcCxXbmdgzU",
  "key5": "gEtvNGudTnm2UX58S2kbBTwLF6Crot9wdvt2q1RNxmAmAXux79xNgjzPGxXxQE2VuVLDCQGdhmLPiSdraWPdpnV",
  "key6": "4LbLihxN96ZZXWehW7NjKmTZ8KCjbX1dF2Y58eHEmCbd4N7fPSYPbEVVFQFmdRu7Q4Rri5FUp6j5waMwpAVXF17K",
  "key7": "4qcGyCqg6f64EDyRGyRvhaurzMzR8mun53oySaTYweYZa1rngBJy81MnDCB8YS4rYeXk8m3Dfs3QZDRryxFaiiwT",
  "key8": "4RrnErDe3U49MnYMZeBvieocZNw3m1cnts9qu2kpikgSVrqjuzdvUzQPXDPja3tJJApYf2NtuMwpyJrh51pozBMg",
  "key9": "2dThkEBqyWqZAiYN2r2GyQr5Ciwhpa65y4kWouBKK9stsYHchsfeZeo1UNjXqKUyUsXD73ufPFfkZaw9ocnmb8t4",
  "key10": "5CTDr8irFDRXMikXcK5piBVhHypfhWJrQ2zXvvB71AdigAdtaPPnzMoh8HKn2wHcr4ZwoLjFtQ4bZ1zQotFyyBGj",
  "key11": "5FqeP3S65itRhqSRCyvCtDmw8v1bKR8QqpcgR8dsKwZMA9t6yFvdDBFKnXeFsxRVEupkyEWBn2YZiCP88GRCVKvA",
  "key12": "2AMHxWPX1TddBSdshCTkNPUFwodm1YsFQwxsq3gjAPTweef3doBNBLzqtrGcGYrEcCg7wifW7cHbCHDDRsexHNLZ",
  "key13": "21i2Nz6o7bYzu36cL7xS9m45udL9VG3a9A5TNRXBYFCzPxiUeqPy4WkCmWTjF8FnZRcZgCn3i56gDfUk9ujaYNcK",
  "key14": "qDATaW1weJS9RwQ5eZFrAhYEspvUqLX1nFGqZyVyYf5PfJ2NAnsVrWBZqbLqu3GKsSCD7rM66buGRYmw1TYxBLp",
  "key15": "2ZZ8RoJtt7N86bB8sghppryTP3iJB6VNftEAEiDDnRVGaYpFv86TbqKCwoWw3VFKSo7JjJ4H1n4rPNLu1UzWCySf",
  "key16": "2ekXUaPBEAhxBASvxeSWeCWW4qusc91ctpMuT6vVXp8DkuXVc8YtJAzpueaucAcuqH2ArJ1W8qrZjZuJEjtBTULV",
  "key17": "3knhP8rDyGb9tMGpse5MdV7gewqDUXs8BQK4yuPDebEGKqp5ZSF4r6uRHykmF2wDbtEvFomqdSby41EnzvEU1cUs",
  "key18": "2fBu2MWfUrqRKv7ZarrwJvKMj7H4tPgVwZSMbX2ear7WCwzd1gjyVdqkkeCbjEXKszLLL4QyGaLUxc2J2J2AxUsP",
  "key19": "3zg9mi2yfT4ZyvQZDpesPDxyNpeabKC8WgZWqgo4WcM39nsggrvtDAWWamu1cMiVYJKP494sAyxZ81PvUh7RTaik",
  "key20": "3uXuTyJm12SNEAjYKjhbdCKFGtu4pT3Cff27hyXxR2rbQVYun1kAGeEPp6iHBJtMYRxnupoX3PgR4BhRjfd37rqd",
  "key21": "4hDjB46ZXa4eq5txseJJ12u6zRMKKh7Dx6oKg7ypRcHj5T22K4qfqeuxnzxAEJmXuT8GxZzS93A7i5VRJvhwJqcv",
  "key22": "5LH5Y566hmcFjDPgbbh1WdivDfyMYbJEsBqT8WnagNWDcVHS9Fb7KTh5BRAsQAtKM17hN7Pi5Wxy6RJMkUC6JWTm",
  "key23": "SrCRR99YaVKb2rNdLTixhrnBQpuvR6ZWB43kCGM5KdGsmoGVjLgeHkrH4XUCBmLzoe1fX27Lz2UEgXjKHWD5xuY",
  "key24": "3ibsSVyq1922vPXDpJyMPx81EL6PF6q4UxAqaN6ftsi78AuCx8BY1VZSHxZHGZXArDG8M72x5dhrD3q2MKFcmTRn",
  "key25": "5U5KPjxSLFFtsxF1B7GhKBwyv7JDzpyAHGLt3EcagRfsBVmWyhAcpfLfeCeUnfPxG3CBnXWY8pA4KJ7TRQzbuXKo",
  "key26": "31MpQWB8zsCjv72XmhfCyTyiZU5318YHM6E72W1BkcBr2HL6KvnRKGF6ofEDZzBX9HUsRWKqoa1E7K8fL5s6sE8r",
  "key27": "2rPnuqviR2bZSGDMREKd3FAAzfK5MveqSXHZMNdP6e2fzdmVSSpwbjUZGafp6N66mKpKz1v9x2Cb2pchzbWy3gys",
  "key28": "4zfKGJvG4CMKgNcajthymaZ59oL3KWtMU78Us9KNiDt4JUaVhJptvM9S3x185hJpb723mea9raPnH1BTfjBRWQGh",
  "key29": "5M2Vu8BMdba8MGKreT6kL311uYx47MzGvW873shgS7PjHGJxC1aPZLo68rXtSHbMjVxGP4EhSBzBw4K8H9vBxtrJ",
  "key30": "Ujw86ZiZTyjrNroBiu7kXdbgL6Xwv7yWKFBV8VbsZf5X8AQkVUifYN1mmv5yUeZpTjsnrZa7R3PSh1nc7xRYF5X",
  "key31": "wR96myUwvjRs3RkAxjdxgzz7heqDtK3UDXhhFWwXNEtDNt6UZWWoznkFwTgVZunNfToHfXsBztS4Q7FRuRP9j21",
  "key32": "4Pc1eX2RzF5FgeWt2MWwrqW1oM7CugMtfzcYP1bPDKuJTz8NecADb23AAyUKw4LZ1QiKoNzUo4arH9QsVw1S2Vw9"
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
