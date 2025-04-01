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
    "26oSM6kekoigaWc1ZWMPZ9WVuAoTdPXji24QK45dA2g2wVPJD4ECdJSg5ZeWDuJtmbq86mSf2dCrhaqJvJBiS2vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJ4wmPPXDjvVQLUDYxTToZWi3M3XJoQD6Yot6cnAY1p45z1yQEcrHdNECDQ5xmXRSBNMY9c4GL3QcrP74GAuj6R",
  "key1": "3DiMiWompT2mteJyFQa2zCipiqUvhU6XzQ2qmw61y8g7TuLBpyyXeTeqyevHvPNxVfLyUM6PUVai7q1T2CmBULcu",
  "key2": "MEuTajGyobCsskK9T3Nz2GiHnTc6Zar1y9AWD3rzE7WiEbZtbNUHPmzNcbjQ9HNKYavwje5MRCcsUfNSYYkpa2y",
  "key3": "51G4WyQFYs9S7QEbnLGJJHmzY3cbMoq3JQtDtZrEsadTqqdU5oqVKBW41WgsuwydFwzd4epVmfwB9rUCPsZRMnVt",
  "key4": "2BcEjgXq5uXop1gAs5ZnaatDN3oUDVXk327MeuctNnA4fPN6bGsEFPKVEVpw6fYRaAEYVE2jyKSwTtAXMr24AE86",
  "key5": "21DRwwr8MTzeWRvGK9MP3QwMtRA8FURag7v7PVSGKXUYuXjECxsX2Mbv5jyuMB9tbsmXkNsoqWRRxrYFdGBeWqdN",
  "key6": "3KuNC2tLaqLJkez8dgPwuSv1R52vkR1zoy5bH1QpWD2ro3F6yXGvrmMUSVrehKfBGE5eN5CjKy29kbHsMtgm95uh",
  "key7": "GautQjwAvJ4EFpXbeei8CFtXme2yVoMBurPPA2KUhz84mKjEfwbWH69NMmsMF2i8DL9Y86axYJNuWopm9dWBXRC",
  "key8": "RDLV4DyWbMjz13G8ieaU6Du9nLDoQ58zLLJEFqwvWGW92FahJvRaqD34RauyWydizdv68JHESwFDqXWzjp7ai75",
  "key9": "5kMpFLoKJFsApkpH7P12yQaHhJMuj9pRhVd8yhkGjxaQYzk2LjQy2VCWQecQAPfoLSZHBWQPWMcWJ67sB1AtMBNT",
  "key10": "2W5bJezqwQPwjVUkVBN51ycJVWBmXDiEqfAmWdvR1VbEHPRR9XgXJwsW6exbhCgoYUAnoJFFsHuogPEp8rsKNKhT",
  "key11": "31Us6s23iJXXcz1PykQm74J25YFRPSHTWUkXfDqT5onEJLVoBSC9sZdUSzvRT73L3LDSWUQdrtrZeygV4SQBDoki",
  "key12": "2YpAL7ksGgt8vgEUWdu55NxZFQ7XhJVoEGnXLtixUrmpPC9CCDt8wzaqKk5Tvn4MywP5HDubczc8pRBcb8h7jiR3",
  "key13": "oseMWNekRnfFnbgGChHchoieeYcwaw8stuiXfPkGK3a5TJpzQLkxWXpsQFQkaRwirUnyRJYKV7dNM6KDtD5pPHL",
  "key14": "3HVJ2FBHWFufitJvEg1vpALvByN4BH7TkGCWUpjWhqANrgRmd7j7SZYjVWNaorCQwVY5rB2u9pzxoQX3Eb9ieixP",
  "key15": "2T1ffAAVL5ikBeUbFceMhm3Q2ZwWGbMYUqgpgo8gCtqhhTG54wfWAD31TjPqsCvS7NWR4e5qsx97f5gxKBWW9YVC",
  "key16": "22kgKzBBpXD2qMT7a1j98XHW3jRBgTpKCYwLUupLKucJxSRmUR9uFCAYajghqwTTYs6qhfKfTaSYnDMwaRGhyXqK",
  "key17": "4XjwydmuK9v6FY6t1nt8jnNB1K7gTWa2RyVZWJGxekVWev2GF3oxcdHzzZ5SFbNnWvoj6QeeP3Nf29UpB7TPpWCB",
  "key18": "4ujadf6JPHTPQsLFotjo2Z6qBqpSsaFN4S9aZc1EE6JQE5i1QQcpDgSoQmAsVkfX8uXjag9m8YFe3KrX67tb8QkT",
  "key19": "3DZZGge7FsyF4Gck3XBkrshWERPccQzJKcRyL3YeFBaZn18MzdwQVZyYe2vifnbR4QHr1ZKuDzTC9ziseRpW6gL4",
  "key20": "3ouTytb2Ud8q61StMg7g4rwahHz33CEjL6cYmHMw8G2C7QecJbesS6mJSzJsPRvMVkTbUUNeQMu78RWcF3FFu62e",
  "key21": "4EgMKRfLuf2p5K6FoD1PmkDwevm1anDYEMZhhpep3waA5sq4EUc1Vu4Pxt1tpxRjjMqDDfESvkKGJBcr8ucxMPDs",
  "key22": "4zqmj3yRU4AQok7oGoRYrArAVqDALuT3NxDbJCEG4QQ2Cej1zvmvYUCYjjpjyffX8mEDiezWTfB41oRMG1vwWWMS",
  "key23": "5rt5gut9PMS7rLZfjqdie4A27xFcfWbFRvCPnSAY5Yj6jSiFVJQyKmBQs6GLo8nvyuDe3Vu7XPPdvjrj6yRmaEaL",
  "key24": "2TD8UZFkkuMXzCrFb52cYKLg9woDSBzQdZo2597NytwQRUrE9gotMfo9cUCXWeaM2qhqQvZkh2hmjxJzprwqeTuG",
  "key25": "3EgmbHFU74zqNHqZ3ZXCneXRKATUTX3Kk4BezXPcy7xxrwTaRHu3VRiMAAbcvoyfRcTrpxGi2GFWnsQy3euC7G6q",
  "key26": "KJu7CbxSr92YSfs3reNt4onETkm23tfg4go1G2e78NBSLT35F15LQWejtirQTzNLPG9jttjrdFK5gAuB5eRASBU"
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
