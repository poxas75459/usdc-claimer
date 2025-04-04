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
    "39Pzbebg7sgs2MpU6xFw81kuayBR8xATrEScvs3frRXoWwWQnP5CQ1gJEL7uWjWfnsJVobHRH2y6XFmfJLo9mcMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iVfC2Bo9Xq21fTA1X8QMHtYUSba6kD2PWii1VQvjSiDXthTjz7PyNf6jMwpNzEYaio3SKFXLpgjev4izEJpAWtY",
  "key1": "3RK5Ai4h4txrnmJJjFnq7D9CLnrx9P221AHbtGMGnxstvdax2syYQot9kwd6oDRC4pyzRmKN5mwX9Kv1VinzKdXv",
  "key2": "5PNQQMAQ8h1i7ERjxWBcgMu4yRTioR7bP15tKa9zyEmqhSF2MkJqxt9qBsnvsX8xWSeiGqcmEgK2E3DvEaifteCw",
  "key3": "2D5H4mvzwnfpe8L7MwcPAu63PDBZNfUDk8YZRG95u7hKp1HSLoRLcEGCJHSr1d5zN5WfjBbTEBMbTXXj64F9MUz3",
  "key4": "93SzH9kkqida1CURyeHcrhW1EiBGE75oqd2QWsK4fWGehQx7bn1qGjqKNYF4sky3jjhxPnFdhQgGkt7ruxPSMNf",
  "key5": "5my4VnhuX4ZfjbXAz5QqyhfRjWPEtWJMxynrpD9b1trKScYwzqGCKUDr3xgvPVQgWr3MwN3D3tUT2gcYx2kwfvLm",
  "key6": "3r2SNxTYbKGs57UPgmAN8LFHgSiNKmWTckV1t32GKMDT2uV69dJehgpRLkvt9KnGoHkVP1D52D4kTFjAQeEDhVyo",
  "key7": "5bLu5RYTDDBNS3XJiUaTpQEEN6PKZ8A9ng44635819VHWyWfBFe32LX77w14xKUQLvCuEMjN8knvtCLY5Y5WTwtU",
  "key8": "mhHaUzytK3u6jnCExr6BsyZLmwebPnGhT8ABSZdJCRNS4imRgYw4rFgM6Gj2YFYKUnSCts9kGR8EfE4GDM8rmH9",
  "key9": "gfXaNuP7RVA6XEMZGSkEbFC5BefWQr2z1AZC9swZGxj5rTZy4oNiBNdC8Fqb25vUX4zUh4SK5LtH5y3tane4v78",
  "key10": "hrsRTfPcpiCSm3NmGcbMbnwhs9Gp5Je6CwL4Uf7wdfwBQCiqJLK7NjuS3pDpLn8mRk97nbCSuB77M5tP2KUkQJA",
  "key11": "2Fjk7g4rLR8SHDchykhpatJsTkA489NTTHrc9NZ77ioH8UBnizWx2tD51jxTHEgb8miEhEtSE1ACW7Pv6WPzE44u",
  "key12": "3kkCmkw5F4sFcMdpnS9wnYmfUd9rJz8DdvoqA1hfSsXhoWfAYRc1XUT2wkBtuDHnqgKTuGB6uPq4pNizbxCJPy72",
  "key13": "5cKuFRsbZk7xnMtAs2ipVmhzmk1eGHifWYt2aYvK1hDwaTaK3dLgYjLq9HaVnDWCN6R9t3MYPQkxHFVKYgLpoBPB",
  "key14": "iooKuoiAjUrt8M33LfAhHKuwzGKZz2FwMT2jDDTUQXwy6ZkM9xgi5a89KsxR8uityzD9DZ2m8r8AM3SUmyur7Uj",
  "key15": "5q1YXHCqDKLn5sCDg9oDhPvUnPQyzoUhnvgsATqp93u41JoJudteq6guR33QB79uTg1esNHWscdxmFe64ruUrRxK",
  "key16": "4ciNjx89p5LeNZfqyfEgxMwDcpCKQCn1NJ9B6ir8CCXCFo7Hpftcca2BFVbXCM3wdS3rxLWtJgKg2Ds9nnTNp7br",
  "key17": "2uK2hXxuzMzekZK6YHFtgVxGYHogDbMp3qG19iXzW897TRCt9Eg2nkiX7qM7GkVEWw2pETuWan1WHs2BFg76SnS",
  "key18": "xJ78nm9bZdKGVBGDp3Z7B4JsS6vUDqXxL7DstKjxhvZThdAEhyWRCsRTq9Un329mbX9S31GzC1ydC5fe3aRcWLn",
  "key19": "2rEqtGGgeeVNxrvtvcFXdiy19noGnJBb3FZ4fu1hugwCKzQK3eb3c5ZFPwAfPe1r58JpQNir7aqF43sDBJPxiWpX",
  "key20": "3j1ajiRRyaGxH3uE69gQwMFiRbrYAz9eYqeDBYRxYLRQ5TDQeFizqn54HxzC7M9R773nxa8YxxvkBFuZzqoYyTZa",
  "key21": "2KuDKJupWoHYH7QwSS3uMot3nya4zZm4PDcuh28r4KD9XnCofwiXoKb8XrsJNwEdLUPc3kSByoKwsEJG797fEoRm",
  "key22": "2b4SUzh7E9EysLs6hLkwMUB4TSxdYA6qFVchgMCdXepGFe2pBBaLG3kK7mTpTF9qJbzYoHJuvecX72DZTCTKqz1o",
  "key23": "41wBbxzQTjP3LySsLrxFoSMVjh8S4FCUQZEu1wzhi3Kbm1P8rxKsFmquZjXF2HqhUg34BAxHZXSHNaahFprCnPZs",
  "key24": "399bHfJHwCqECbzAZw1CZ141c19KJ5izN1kBNMzyQ8HZ19CftsoijU7sqzUpcgPrvpbKvc6y1rquwrcFf67EXkRm",
  "key25": "3uAtPnqEj6qH5URaUNCnpkow8txR4PNzp9mcVkDx1eF4b8aAkDsiJBsZGJ53D5Awna2JSQtX97SECcQtA9JPpgvm"
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
