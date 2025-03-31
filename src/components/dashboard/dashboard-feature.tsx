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
    "4zKDdT1PfWVZXbpJhb9PBBqFb43adr6dkbuJ8HkUx2XP9n7zAhnrKjktYebxuF79SP9Y4An6ju8TWoNYeRxToNBB"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2Q9tCzftiA73eDgA6humxxDVeqeR6C6fJJZhM3fwjNEqMoogDPS4unvmWxPFNQ7hkFMwwTGyUFqAA1hpkHjzyg3W",
  "decoyKey1": "2ND38duxCTyhwk7MdJEdTgkKy2HTc9p3nQXJsN1vdBaLwjZAxbzP6UzWHabqKqLHSDg88ELRBkBJwkyRA4hrVV7e",
  "decoyKey2": "2TGzZdzBMBtbUjiWXXn2SnMkqPJbnLVh2Pq2UmC9daKqvs4A7ztcHPGqbsPvjHR8GfLYRjGqZT1qAcronJjNQvAv",
  "decoyKey3": "4Rx7rfo1Pbup4WELgidiEQJ4nGv5fHXNAfdUc2cDcjhUoHYjjENqSVULvb6E8c5Pi2qv9FccwhGH6BpKJCsmtnr",
  "decoyKey4": "3AbcZHYrQA9jZZ2Utku1BdJrPKbzoiZc6aQVLxs36p1qaYxA5YbMaYrpxDRMiwcyqtonTGQY5sNbCwAFpKur56yJ",
  "decoyKey5": "5ZoR7EbR5PuwWpBPgWCJ4o7nht6V3F3BCEt9kea5G6QW7YtCQmUVrBQAv17NhiiWCYDZNrhgPzPyY8JBACHivt9S",
  "decoyKey6": "3Zqgz81mUMvK4wYejQBZtbCFUTLnQyii14Pc7KSFBBqrEztiSMHEA4WxtH1uvLYq96sAp3NwfLijE6UL8FBd3jKX",
  "decoyKey7": "3wnfrHdj9v1SPLRc2uRS4BFr2c125AfTyok3ANgnMe4ESGrqnxw2D8kR7Hiu6iyLfn9ktnDoZNRv5X2X2B98iX7A",
  "decoyKey8": "67qA5PCZVwMMyGAR4Fmrip8b5y4em47MJCba1nkiJiMKomXvbWQgZsNnw6wU8afF5XnGFzHebjJE53pzfJcrn79V",
  "decoyKey9": "2CK2cruhL6qdPJ42mcqhppB4fQhjDiop94Gm9RVuT318x93Zg4WaSUJek1qLgeZdvwAj4wZTRjPNNLXTAamMGgu6",
  "decoyKey10": "2GnLC71VQbNMGY5Dfa3FKxTWUYj1ArkY77hc71sexhaoCrs8fTY2z6wxquX34ZM7vBQAcnvCaEvP2x8zdwPGtzLX",
  "decoyKey11": "2B7LcENbeqxouzN5qLP8gLMrRY7LEdC65EPFTTmqGMwQqgVAC5gX6K4bUkB6gBq1vFxX5bwUSvsmhiymNaHrmviY",
  "decoyKey12": "PXRrEUGhbRAT2YyBShR1EcGuXjUn1ofAp4WifQvS4gHn2CZA4mBm2CfNHusPGVJNPRbG9igr5VJ36qRrozA5XK8",
  "decoyKey13": "4pWm4b6hDxjLPrSPRT18SS97aGig9u3ufAm6YgqQ3oaCNjYVx4jb3DnwdM6RRMsByvWqFwEXje9UXrTrLvkGvk5Z",
  "decoyKey14": "58EaYpgdJgi6tdvpa1pLL3J9u3MPrKTCVQZbB5MWsUMvPnyoWpaQudhFCjMHd4v4s8BH4KdFLy1d8JcA4UPUwiJt",
  "decoyKey15": "3oKDVifcQrKG3nLLZygjrRijF8GMoZo2mktNVq6J68bLhNX24p1tCHmHcRVFSRjUNabNQxAodpFVpac49x2Suytc",
  "decoyKey16": "2G8mgqjUA1MFRaxTuxVRb199tZ3JZsq4vt8CHAYzGBgYE9fV5ZaVQJwvcYe2uftPFhQjjpapk7xkVXDHrqPJU5vB",
  "decoyKey17": "2AFrqbXbBLAxJgikBvtvvoNYZ1wSqFRgAP3WngHh6aYRC4nTYcS85mEemzmvLb4FSHGjh46fUJGQyyn7hFR9vU6y",
  "decoyKey18": "2x5bGCdiZ5kThurp8EvgsHiBY7Px5QxnkqTbcr4ii6oWSKEZGWMR1hxPTNbic4azzVzdc7NjqGEn4h8phCKDneux",
  "decoyKey19": "32SXU6ZKSmSzb7CMzSwmwiM9SQrSF3wzf2ycj96Guz9imTuRGagdJX2TvX7Q5f4Ki1jzh7Eo2HBHu7tBiA4DAecA",
  "decoyKey20": "2wDdyvxH17JzKBGhWWkzDaNfbSBwHdz75Lw4qnYHrX9eGcbE5ibX5zJhRG5n88xWGJcVPh5h7jxeJYtD2mKmAPNo",
  "decoyKey21": "3Uswz83frSLebwocD8RXDch42wBhkrmV1ESHKC7g5vb5UsQW5EMdRx4C6NPpwXsqaqEqytcUSEAzyWQUHSWtXxR4",
  "decoyKey22": "7xQ8uPaSfJuvC6AdJKE34iEVTgWEeDeANCNmqZpqc4iixyjJLDcx5vKAf39yoZZotaZqkyS8Xj5g7GuwNS9DteH",
  "decoyKey23": "4oGcMWr2U4N8mybanA3456f2H9xersSp1uGL8rdPzJdGQS4n6tHgew68Xfc8Nxp5nW4MqP7uWQHfrHSGp8VmhcvC",
  "decoyKey24": "5UegseWFEqvtRCBdbVHem4P4nWjmyup1FxZME9FSHcgcxA2vP6NqGQMyXjGe5dgP2C74ey3HAL73UjHygkCgKRUb",
  "decoyKey25": "37r6FoTW3gviWaPo2qJsMkxjgEbP7q6Nfzvu4gbTLNKpEPPCsPwK64xSBDA5vyRtxCWrErWoVG5kYueoRVoYws5z",
  "decoyKey26": "rGTpMndUaHWvVG3N8NEsjUiTWQ3cCty7vNxvypLnCsC7VApNdFv24mfQpLFvMstSXckQHMiVAEoxChdAHH7Zcec",
  "decoyKey27": "4rFoq8K4kfERrcCRe7eqM83Fd5QSXGZm19Z8neqcdRA8tbyMURC5xaHrDPvsUSjbxsXv7j8VBNKPHUKZLobFM7gy",
  "decoyKey28": "Ns7RgFwJDzFkZMmZdXvA64ieemLUUST8qY657gJ71WCzEoLwKHpaHWuQ2zUJEwL9Jn2S9nEZdmmQqS47hKrc7Z9",
  "decoyKey29": "2CX7PWEjG4kt7ZZCoU91jtCcwy2EhcngV4VMw4eUBnYNDkp4RiFdCw69dvnwvipdSLrmBNmBSAdyKVNpuu51aojs",
  "decoyKey30": "29uNPzCsva6aAPPjigQGmP1PJitKaAPR7wxhrjJ3gck6jaNCxnuozzsAfkXf93L2794DoxW6grH1XHMxps8DybGZ",
  "decoyKey31": "1qRhKnKvGYt1rhRZyeSiaQvvXS1oRkGTaxyQhU1EbebPMdrQLAdwMeGMR2ZHLWzuPgVouvE1gunWGqLZbh6rHv8",
  "decoyKey32": "5N2fJozeyV2bgDTqq8XJBxHUehzq6JW2HbeeCNsyCdATCGaZkkLTc3f9aMm1RxJTVd5L9jfp85zc5f7sSu4Eow2i",
  "decoyKey33": "55uies4Dh7ijjNXJGDJ6oGiRPnV2b24tNKbyEbZ78L5bt2oF6CZts3gRv62qRbUFFPinx8duNEMLtVZy5yyjcsta",
  "decoyKey34": "jdAz2uKtFjHw5hhjri5vDZkzPDLbC12z84vn8EzXVXEAtdBFzLuU67xnS5bbSbs1rR5R26jxXk9VaPG6Pj5Rz4U"
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