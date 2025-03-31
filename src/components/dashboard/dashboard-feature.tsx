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
    "4dqQiMpiBKc782ZZfvwiyujRgPpJ6Kaw8MTb8TQtzAsg6qQjHRCwR17sDP554ANRGzcpe6EPiS2FWuvFnWhgrZZj"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4ojbJca5QGWGjDrYqFn4QuRytRFS6VRFiYqzEocfgsefD7qCQu2reM8sC4347jCurNCfgajDSKnEAhCtNeW2CDBB",
  "decoyKey1": "5JnbqAmZKNzH5fQ2iHD1vphGsknRfACMRCbHz4BDxHTAPLCq6PRcGM2o9WrmQDyN4MAp38yJx8FcHHs8HQB2XXYG",
  "decoyKey2": "4sF9wfZTxb7YRfP38VZdgCgYnhfb5xjd9E2z5JR2YmYa86eqkGAgrozoofoox1sHaPfqNEfpj8EYPYLMhBnYA3rM",
  "decoyKey3": "5huGvhfSFDYQrcWjMbhTQBhwXETPwMRVmjWPv5JMG7RbXsJxBFVaqbST8qdYt5KiS8w6oXfou4cNm6xo6SFU2Q6b",
  "decoyKey4": "LmJR1Zknu8rcGGm3STQraA312HGPxY5aUfhbk1HJYhGvnC5imFM8mqCu6Pr2AwPc7uNiYPa6ARbsRX9LgCaiM7K",
  "decoyKey5": "4xciAukWKJhtnaKjbQZTRCSPNeMhQ33uKChtxhqLHfvWpMDsgnGtUUXXfdkXk2b9UmCRNaJEHzoqTmd3XcpRMjU9",
  "decoyKey6": "2Sqsprg5ZS5GP8NahfryjYn7PCDXNBq2rC773zMzD7Duyo9wf9Nke5KVUSjh5ZGvjwjosqqhu6M8ppzk9c2Mi4E4",
  "decoyKey7": "5n2VCywvyFicMBWegpxTYAdSK6D6cnMvPFAtFKBk439Xq17dK5nf5jKHrzMCrZRUVAsAuwpAiFU6f8oYwBouGpr7",
  "decoyKey8": "28VDheq4dbL4rERTmnDdz6jyPJWbJAiFXNTHfbQBy58QcP7SGhJbwcQqpAPb7NHKSUsgzDbtazMYL7gKLpFnJp5S",
  "decoyKey9": "zvFvz8zerCMcvir27X4B2kpXZB8UjhbWCkUBkszzGNPGNQhm9LAXw7qyGZds5LMSpyyXo9BBcVfBX9qWzm6vBWe",
  "decoyKey10": "2EQBwhstJoSdz3ztqtSWHtwsHrneFhDggQh81XNpbGFzr3HEi71MApkoH89k9WQKh5PMgbgxQufQ7gMdmeEjU5bU",
  "decoyKey11": "2gBKdfJc73wSZ9DTsr3fi9CmH56ePxVXYX5fLwcJzW5sWYKzj2ePBcC2wsP6sZdLK3qUMirXk5nLATMPxertwdUX",
  "decoyKey12": "fMnDUZ8uM6EztHNjNv5aGB3k37A8dz6W6vLNCaNt6trMT3xBRfdQVQnDKwNCF2y4Rrd2fxV28Q3crchEckE8Cnj",
  "decoyKey13": "4xepr37yZTG8s2koDudiMT16TsY5R1xSYW45iUqujrKuSUtccgQkj6Citi84WNSDbWtXV59fUt1FDtqcfNp2xP4z",
  "decoyKey14": "3vL2rVArPFj33ZaW6XNT4V8QRYhED2xbgY97eGTJinm7kNwZmaDUd29k1GCpRqzrzkTpm2tiZ2cmyDrTRoZ55nYd",
  "decoyKey15": "3cXVtwkuf2dVYt1P1i3GC6h9t5WPfG5FavkyfwfkfEtnBGBAeHme4AztQWvQDyAetpRicXsmY1mGpnsyHWdLDcnK",
  "decoyKey16": "3pR4xXR3GYeuLefRVgoEUNykxtogMZtLrXgbVAKpZgt3V17cRe9RRvhhm9KRrmozrpCCaXrjTwrCgMT3i1fku9Ku",
  "decoyKey17": "3C4YYzRgYMRf5woouXUg4GJypAtaMzw1WbGTzEEn3zdDF7DJwD3qvwLm9NZZNwcKZLmQsHi8hyXssrbwtkD1KsBt",
  "decoyKey18": "41iPZJAnRbnDzTkyY8znAL9pzARSbyPQ4aYRKwLubp1ZyCcg7JWXsxLq453BQ4EpNP5o5C4hrMLgEFZ3VpJYXCXo",
  "decoyKey19": "4fDSJ4rKRjTG8n9B3fahicS7nJj2YqR4BQVHcFMKptkXeCU1HYC6aPubEZsCTJJy4YDCwkNMNYBT9J7igkGK3UmX",
  "decoyKey20": "4BPcCWtFCsQ3vcgTpCxdjKm5wg1kXvG8JV7JYwZyxUb235XqWe53ujaE8WdFXxkW5kF2mQjLQvRd4TwdhrpCHPKw",
  "decoyKey21": "57GyUnQG1Yt3AuQdh9aGupzugMCUALYUBq5uruwFsxFf3gkpxVvksoqmkKACPWAB1YEuWRmPvehrY1KFvfmRH6pp",
  "decoyKey22": "2T6ra3Fv3mWqkbp737g6LyzTPbvRy1r9JN1VgnQKy1UGhjDoeDEnUWtCrvYkvm7E6gerRBrTEtkDhW3iYiKAFwjJ",
  "decoyKey23": "KacmoThD7jNH57nsjfDKmCyqEcu7bQYJsDbVHg8V956pogbTKRT6c6kZ9z42m1kZeyBUDQ83cmSeNXRTEn9g5Qe",
  "decoyKey24": "2e8Lf4iwbktxnAeYhTyRycrnA3SW67KNATMv6bC7gKobaJDmwHfBQyD5haxSdfo24bdaaHqEAePGT1fDffm6mq9J"
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