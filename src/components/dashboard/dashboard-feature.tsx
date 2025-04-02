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
    "3cHZPcAYVeMMSw8DTeuszSdifW3SauaNbBrusrY4CYVeGPkE1PBmAkjV42ESbS79fKebs27rixZscdoFRs9BWEDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dFprr4VJFt28qAguPu3xbVK2n7AtnPxjHfM4Undz4ycG1NCvNfXixeZAYENoQraoTUfcL6FVp77rieMW19hdiY1",
  "key1": "5FYcRoRPi7RVWdmesxJ26tQqj7nLzcuSosZv6TLFK4zLCQdu1z9jwspz6FFj32B8aFhBy496Uj49dHgG2X9RAzi2",
  "key2": "2hrMvL8cpfYTDtF7c9UsXLLf8n7wHK4uufd9L7Aq725CSicuPGKDASyA51GnTpe4g4GbPX1Jnsqo7zMBwyMMeBUQ",
  "key3": "5MAXjXchqbtxEz6dfGj5FTuUhMrk6jGNbUr3PHxBtYdYixmu9NExDjZaKmxde9mQkgRk4s8YJNCFK65qsBESDRmd",
  "key4": "2eXBZHPXKxEUbPzQnmnoLpYpbXbyuAFnRc84utyPdBMZL8KUmCv35mLLRhse61VX6BDH9mL5VhJzLwHB9r5jrhQM",
  "key5": "weGmFg2S9EsX4i6xaiLrjEWJZK7273cDE8zUAkbJJHZv4hxUixAQXNvPh3LV3fuoGj7yWw4MzbKCDvyUJBk1wVo",
  "key6": "5dwKGDfZ7CndQAfkWCY3awJFn74UJzp9Xm1yMKhXzemFeMRo7zJroijuFbZVCeq3i6dQC7DB5WwiN4Q7nmdcQ67u",
  "key7": "4Dk9LMU3jDbPBmTHUkVYyNDPBzpuncJtDsSSSP1bnvvvGPfUkVKgzuhgYBXbTiJRBqoZePmCTaiUvVJfZ3CK7RqZ",
  "key8": "58G9o81GaP73bnQwv9Y6HW6BV2y4JULsUcVnhGK5fR6i1C4SUanFCf4ne28FHpjXByjNbGJpCyFgg5xhTZEonMPL",
  "key9": "4aNyQt2YG6TNeG6hjiq4hxndb27bLdxMBhwcahTV1EWfwe9Q9FCWg4YVbhnxcJegrmWiXWonWK8pSmpNxerfDEs1",
  "key10": "4R7PSygwPceVKEdkhUimT36xfrf88wirsr994ahNW1KvJDA91vwCDUtmzk2NhgPeUfcBp3odioJHLjCeGxX4QJyT",
  "key11": "2UMSVJN7rR1YtrJAugzVrezjj5LSfz4LbYGs4efyc1jXpmdCHtzkFoAi3Vy2c2hDgnvogwhQwhVJHWAVX5CbwV4j",
  "key12": "2NMJ7JT2Ry5MerRDEX3grY7WhGNo3cLQRFJkr173uTjwvrdRX98xF55ugqeXTSUR4KSR78FCheaEVSPUWkGA6oyL",
  "key13": "28ajhfLWLJFPUARff9WbtThh1DxevrN6y1pFL5p8MYq319daBmMdTa7raCNjGF2mt9UfUoFKU73aXDoFd8VHGmf6",
  "key14": "5dj2YEE8bHMyAXwpxUbs3zdwt7wAfb1FVqR3JhVpqDGHMpM2Ktgy7NHBJuBZWoQXxckeur84wc9e8omuEuxWwLkG",
  "key15": "31L6nn549Z6QjNt5PaWeMh9wnht5Dyq9figWzPUmijiUX89GP2AwdQMW6CFM9eNWGdnh8hDnSMp1PKkkdn24ihAh",
  "key16": "3GiQQUmqWZvSe2JrgcAX7qEfu9LtmVPzc7EQjDpWffDdjGh5Lnsc4nV3GL76Dkkh7Ns2Wi5U8ZTgC7fNVedsPKcB",
  "key17": "pewcegr7YVHreHLpjqNnJa2Un7pVxDE6skL7DY9AejhfGEsjvXFepfCfetHCWCA9ja8tATnUAmAovSpGhRZp3GW",
  "key18": "5bA3MUzF7SbHrm7b8oUdo3JKg4BxWCveLejmwjyRZ6q5PYyhtKwCVPAuxatcr8ABnWZy5pp4hy5ZUfxdvQHMSa85",
  "key19": "5K4bbyCVx6LSjYkQACTeSARzM4KWwLzMY2Sgwr76yXcKZ1Ss5vaCVPbA54rtBDcDkD56hCo2aQBnZgv62aiJxHGm",
  "key20": "5fM61xLQwyKLaCv5za41UQHV2JBMe9h91coDGU56tJAnM2PUS6TjQBapLA4g9Qfzeq37zx6XWysY97Jqsk3s41Rv",
  "key21": "5Y2Kq5n9rZrPwxDL7pRJgs3zjwAeQJxEE9ADAAjM7x2CPWapcnN4v9zquoP8YvG9xY5vooWpfGmLa5eB7oGpy3YQ",
  "key22": "5PsvLLyA1q4gcFPH5DDJZ6QLWsFXzJ8fBsfaAj5B4kDsejHG8MDLrxDqbmCYN2XxBzyYCmGQWscA4kPCCdrPqCyT",
  "key23": "qs5wny2pQFF5gmWh7uD1XWyaHTmszgURwrsTJpHg637nf1dDjVqdqZ7aLU1BMLRVcy1tNwrfXJVqdnA5jMV58kn",
  "key24": "2ramC8gv4xGW3LwHiiPFWdZHNmaVChobioueaEu2rUKKnWETEKFDnHEvgLBRmLe8hQvKqnuYHfxXdAEz8DqrvjcX"
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
