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
    "agh3XEsDs62YGP3BkEwfEVVX47CFP2smiw5r6e2J5Z6539FRqWiLtThxzXai5gRCFrtxb2nGaXG4WyNUwJ4DExq"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4hqJ8JDnV6RttiXma847vbe1hXHDTz86vxtiMLvWSk8YKTdYaCDWt8ycoxojn1Xm5ZKWJwpjLGXumHUqoQpgezpD",
  "decoyKey1": "2mjJvrLJ1qicyygkyxYMxQsGXb5KjxTxxMqkTiQ5yaYxtjgUobhn7eqt3jDZQkxcXDQj4MXgpsec4bMpctzgTBcD",
  "decoyKey2": "4po8S6o2xq5hUvRwCyApCJPFj71JVPFNVYfTVbJZ2ugeou9KSu6u4mwHaVennE7TEGQSFGAxTsG4aKjinkHzQh6d",
  "decoyKey3": "gpc2f7eczTecAGrqaTKvCMDsa7o6gMaBv8ZHA7ixp7LFRDMvryVGL3upgusFZaAGKKTYfFaKiEaoRkTabRUoS2W",
  "decoyKey4": "2KYQMLK83fFhPWGZB8p7hQh6w5hEHvRQuDbZWD6pafEXJ6ozQAZEbe66Rc37dPKTE2AcQK9ba6r1B8fjWfbz3AQC",
  "decoyKey5": "3UszBmUDgDxucg1tFuMzZ9LwWtGZwE9ALSQPjRtL1AKJZJYKv54dQAa19rrcb62JFARUQt1XETEstp6v89fjBejz",
  "decoyKey6": "UK14wPwxtShvQUgGXfzzzDmjV1uEiLbsypw2vjvna3STUw35yiSaBoaMSLSP5LJWd19qtdLZJUgCnchNVFKVy6e",
  "decoyKey7": "2xu2Xp5FZpnxwMgruB82YdYZb7SHVyzc5ikKuDf9PiuVi5etvy9G4drzoXab4gkyjkGY6HF2APfP5WCqKtfbn4yc",
  "decoyKey8": "5CgNG9ZSQCYj8VttMp1TXm4zaGhYNkhxRzW6u4A9Ez3B7FTVfafuoxJsrR75TScQUwAg3A48ekrW288aejJgqyL6",
  "decoyKey9": "hbC4pqZ6b9wtqdTPPyoTaoued2sgCdbCEE8ETbcWaeRMPVEPdNV9eMNPL6cCEGfL9rFg5FpEv7FBE3HoAsCbdgU",
  "decoyKey10": "2QgzSjru2Wnu9VWUjCrCuhgosh1fducbtdaQWbrsu5oX6pXJP9r5dXfFyUq22DCfuC338NJXNH3No4Dpa5Yvmjvs",
  "decoyKey11": "5wnQ12WHqYchMkfDH78rRDG3MwdEbSBcg8QTjQ5zuU6pAFrEBv3coLyF9ft4FSvK3f8mcUkvuYPctgLMqLeSWrhK",
  "decoyKey12": "3NAebNyYEqbbz3UkYUdEZCEtZjNQbc9W8MLdADHELnHR9x6rVQDM4uM36jzdCkv9pookxxidqRZZjk7VeNyG3Ri5",
  "decoyKey13": "2WqP5RMkgaHCCJMR4GnsZc6m3TDuJ1YtKoWx3e7xDrCcTt349NHNoPqPW14Yk8HvE8mALfTGfV5PoZvcCbpLujmU",
  "decoyKey14": "xFmFiVoCD9LuTtuA6UgXBe4dvohNBn2BVD8ZTPrWroWscNrNWKmjzxrHQj4niT5rMhGSGq2H4bRZpxAyzWEB3ZV",
  "decoyKey15": "2v5Kk9XT5ag9Jwq8FTXuTCrtyxT7L6msiG1RLqNAuo2AaosMpK7c77JSxg8S7C9jG39k8rjtRG5fnD8frG9x84dp",
  "decoyKey16": "4iYYo2k7Mug9ZfCxx2tJy9bN5bHsBnuMWgmMdHPQnJxYct9CSSUzQtZwH4dhyTqury5LgYEtYT88UMkeg1RwcgMz",
  "decoyKey17": "4v7f5aEj1PogLV3vvWZxzsjiaWT5ed1GzFfBkSqtiu7JepNYgGr53Y1Jamvquc5AgyM58Qy5VQtKjzzc2mCkQrVP",
  "decoyKey18": "CBPgmVk2idxzeurD7sVKNDnmBsvZvYSfAGrwdLts9vFKm12yNyhrbSh6HLkqDuPaSN39XuxUyirq95gnk9NuX3V",
  "decoyKey19": "59YUi7xru1CLqTZ8FrbFpEmpVmemhrpa5e3vxDNjnxtGRBE4GpaVTS8sWYUcDHSRNEfoszYaJ2QGCzo1kxLLwfHn",
  "decoyKey20": "3DyrNyaFC3gzRhV1GBMDejPkZJ2N5arhtbnpE62R7wMJ1GrSTUm4xxDetzi4kPFJPs9maFQ43fmpJH7hqopUZs4y",
  "decoyKey21": "2T3qEhgif4u2hDYPAod8kbAVq6F5Lmx5LSg7CRswE7vUeh1dPUWjxVuaMBKWRznWfQKAMCNuh8ajZuWJeYCYft3h",
  "decoyKey22": "5LDELkM9TcfdmYchRVwnPn44ZTEEt26spwLj7Fr3eLDV5LxV7EVKXqcu6nVEadPS57sMPTRjKyr1gZqU2mEQh3AA",
  "decoyKey23": "3TYRNEmMkMY4DfKfxW5k1M6V76DtNbZGGNHhjKiqWRBKKSDQRCvoH5jDJhMwgY57HJKDigX8Qwq1wjuT3oAq1N6E",
  "decoyKey24": "5QaPSoNnLPpEqevipgyr29LAYAA2VF2yLruF1hM1HKwKMsP9UYcxtQMXAtDjxb7txdWEJBF4u7eUQGqyGgrmbozd",
  "decoyKey25": "4BYSXkT5Hpr7ApXcjYR8WJxbcFMhYzs5cmp4rRwTZUYYw8eunDuL8aAxhzEzWwzP5K5oWaAUAsPE3ipGmwivP2DY",
  "decoyKey26": "3JotM1e7otoYujPRVFzVAXYknxvw6PgxMz8AVPfmYgzgGys1unpe5MGfRYhBHgnTCYpUbG4EYX6YAihhqw7TuasT",
  "decoyKey27": "3KXqfc2YgLDihTWtxpA1n1duj6M4ZKyoWwLgnAn7USjGPezaN2S9YfcbiYNz3xqd3Cu5fg7iH4bERgjgL8nXPmC6"
};
// DECOY_KEYS_END
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