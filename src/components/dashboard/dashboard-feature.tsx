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
    "5A1oVdboAxoSSLQUdMT5tY7svWxvgm5wvNmgEiuW3r28mtQc1hhQ5F2oNM3LdMyx1N3Knec7iF35H2waQ4dnqLY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dUCFVtwQDtZs9c2ZHVxW6hYGDvgHJWxxt7M3DUxyUjGEU8ARe6UgWWkLczaKTzgpsCZweJ1VPwXHXcb3YLSostn",
  "key1": "3c7cYWRv2DRj4RCWk7qLisAaTJGsnpM3WiMMrNidtYxHJYTVYfTGLGSV695WnRXmcBB1McK9rN3rUGDt9GsgDa1C",
  "key2": "4JH8NS1iDEK6bzxL4jawRZvNvtre19kS8ZjMNxRXPsHDaNStBMEeKc4j4DK2FZUwV7xf1VkcgpKh47dP1i4zr9te",
  "key3": "AyRFSTP6idze7yErcs96uEYhi4crdUaWZXnd4sCXB5nLkt77wKkgg8BE5w4rVaH6DJnGyH7JPEGF6jicpvwmmmc",
  "key4": "5zMMpPGFeCgcFcaZarYK3VMFg3TBoE8WDthQ7NYbCndZENw9nAnEFWpHpMi4qULHNnA37mCm3oSv8qAv5PcD1nCA",
  "key5": "5ChUBfcAdFcaRzVgNs71B5bUE9tkZEU8gJAqS1A3p2vHLihrAwY4fAkDRxiUzSqkVbsJejEnJc5p8Ay9wUB1fQvH",
  "key6": "NLnDtbd4qroyU2FggqK6wN4jzoauY6j6nGwbz2XU1iHsVygWx5B2J6B5XucgjBK5BCpfoPM94QsenThpwCiag1G",
  "key7": "33dHV4bpoQgkkF8XgbkWxCjYmuQpei4pJC7ggzYMxAH7yUW9jyH27sc8a7cwcz6NLpmERrJqQSSAVT5XX84iSGuo",
  "key8": "5CGEkRYhDUP8jkoZPUvQHoDQjdHyYCKT5Az4xVXYppf1oCBQK6vvU3aCXv8NSXKpD1nk2JQMx29hn4uBNQPqpPmf",
  "key9": "4VZRdTRgLXLWVCs6zVn3PF4XB4NKDpSAiiaVajZcS9twebzPUW1Vyb5uWCDKjsNUG1Jc4N1xKnAXjJVwVPTsJRrv",
  "key10": "3CozL3wUELtobG8v4zMTGyJwrFBtB5s5wHvhuzUB58su8UM6uqhnrwkWQ1L7VoXNKPP9hRDx1eNxcuVHZzaXJYuj",
  "key11": "5YmzLD5TuB87bHPJyHQTamhqmogbVXH7fQ47wSZqWWAb527bJDTmkLFJTt7B77JPJfTXXFhLkGuwjU99d5DC3u1Y",
  "key12": "46GNi8iaj1RpYeczrwS9xSXargVmEpqzJypNE1DSfAWp8isrkvZzkbfLXanxaNKx7m3dZy6WRZ8Xd6fM31iq5Viy",
  "key13": "3qnmbx97xkt7q3i3DYixbYx1WNxL9U6DwNuZ1azJdB8C3mFLWqfX84mVKBCaiRRzzcwMbJdd6KP5toMpe5TqnSAa",
  "key14": "2w6zHyDTfPGqgktBKnCsAYmxBzegV8P3LfL7rPVaZ7fiF9YbwUCLJRRpTcwiJyqXyWu7Hr3Wn8zLG72Phqt4qWVZ",
  "key15": "3xA4Q9tVr7MgbhDWLWp1SfXi7QLyxirCekHXZeJ7AEN3m71SuUDiLGPtEouxyCqzWiq1PhMBsXfr6531runG7HQF",
  "key16": "3qmmnmqbgjkWsETAyduXARRLGQYQGHNH6FzqzLg1xBEvKmfotgKw9QcADQqtuXpzP8R87UCnekj7qbzNvjEtbpWt",
  "key17": "5sXMrRiN19gbMxHv5SuzxZzgooojX1nGPnPdBVaoNEZxnadFomaQqSpNnk9Sdo5Dtx2HQJHG7fBENhnBCtabPkDW",
  "key18": "5zLCo9Mh5GYaVd1hJCPkBEahmnoZLKiAYCFMubSd5gL9ZXcLs2VBr7dQKBFbTCWiE5GoGKaVVqGfAVVrUtTqg86M",
  "key19": "3p7YyJMQc61XdwWURLKvtke15DGCZzrV2wPc7j2GL3NxeY8X6er1FKopaxGxtiGEH9sbVuBkeWY3PL5eAFcwUiZE",
  "key20": "5nur6iy98nLaPZimeJjePBLtM8984uwrombANaZs2QEMF36BE9bG8n8JfZytFM3TDJ8DV4au1PBEka4yzsY3xGKv",
  "key21": "4JDZjcfMvqjMSwN1LUNXPLXp1ESkQyCmkMJtr1Svr11Ks5PX6bt5TRo4Xep5gc2YxBqZ3ibw2Kh3Ry6n8TN3HMrq",
  "key22": "3oaXtwMJQ6q9zkf5xf2EemSjqD6rSTMb7DvuDg85owUZVX9PH4CvS3BAkLJkcnGgPjaFdasAu3LBEZRSrXbyp96J",
  "key23": "66RNXf3HurpUHHiqxyD7RNPT4egGrkmeqKW294tyYipNiTF5c7Z1bdmcgpkdN9o6VfoFu7E2PKGQuuoPRhA527yo",
  "key24": "oHvZ6YgQMnKTK3oa2T2nsxxWPDj3NWPi1H3CLfSUgonpQMtduSHHyC2koRw9S7UwWjCRCoQCzdb1TW4WefsTLqd",
  "key25": "3v8YJgTUFEWEkpuG7sT2x4LPgb6xGYPMxQc1j26ADRhubaCDsywLsLMyphUj3Q76JjjrYnoJVXD13D61m2q9PZ9L",
  "key26": "2Xxa4ghAPm3kJqPtdrk6Lnqjbqad2ghdyGDYcLWJHSHppffN19VcAMcvEvioSEknMFu3dxjf6o82ZszDc5St78rT",
  "key27": "2JJ2GoGTTb33rXKmo7Z4vPyGQVNNhXiq2wqdNMSzXmiek7gyPWbhGvuxSm65rpUf9E5N7UUZptLjy4uoHHS22Vr3",
  "key28": "5NdJLjKG4JSb6kCuLESdSiivSThzqRjJLXgTxzpyoJCTHrv2PjVmAHTkxiFz2WVLZK1Dps6Q1aY21SZ6mAVmbhA8",
  "key29": "8hjECd4eVB7JC2RLrbhuqt7nxWs6xmcLunsVnftY3Wj2tL9QVJ8zKQM8NDTdZFiRXAy6vKVj2mdEdJiVjce8q6s",
  "key30": "LbqvLtyJCXmjtwfjFBd3roaf4SKhXDaFycEWi2hZ1zqsW7MU1Csue2KboGMRrGfsvdPwPAcqu1nHHrRMrqnxGP8",
  "key31": "3xwvA2Ab45DKLnVbZfgJ9KRtq3K1QzqGCuWPWd3acoRLqKYgUs2G7pQGWjPMCPNH1DXbezw4BAp9VhBnKDH3zuRn",
  "key32": "Zx5tAmFhG8eM5gZ1n1hXtAoV1GGPYAWLUgPkoDoJTqUeauU9QmLuUDBYJhXdY67485XkHTpphJACwLui6awUBfT",
  "key33": "4Spy3fFbebpGf4sW4EFmGisT6jD8avcGLtvD4VzbASiUycBEcePF9V47VNKXFKvLx4YzWfnqyd7uyPPPdNLRqTBR"
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
