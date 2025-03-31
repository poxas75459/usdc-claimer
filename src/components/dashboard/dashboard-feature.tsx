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
    "eYvJP3VLwiNTfWnWAxqMpcjVm94Lh41Ed1M5Bg9yqftMqUCDNTzwnKAdPR4cnzjuSAR42tSt96aCJ3mUzcqucTa"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3JcSLYwm49zBt4fbXCfecYi6qTDDDdi6iWknKLBV2MJkEH3wkXV6WhkFEkVBkL6MFteV7qJY5L4GfGYds2ejnpiC",
  "decoyKey1": "WYrqTgK619PfxhuJ96Q1Hnxyv9RCQCqkCwXJFcfe4UFzQYF5TgicmUJ7oneM8Gtxve7PfcjzaifofEg2QzwUX5G",
  "decoyKey2": "dVTjGgQRZdNBs4dMnSrtwMULWkEEoC9HGBfmP4m2w2JEXwzpTWoWu49PSug18iK1buF3QqByqifeXsq4baa5ob7",
  "decoyKey3": "NvXXbToZi9TqwAZmTkPfenVh2pGctFt2L7g34pt1p5K55stQuU1cFZhEu8GhVnsCt1k3RL3SpMhsG3gS4z3wEUa",
  "decoyKey4": "4QKkhfxbUf9uPjs9QELDqbDDBirTximm7FMTCv8oH1nd6tHsRqkZRhd6PUPwUi2JEhLymX2naJzhGKUShrNouysj",
  "decoyKey5": "5izRiBnPYamz8MupVmYSnsdtcPVzGZM1tcWM4vaN8VJcTuF27hNCXEmVBCWUvkTF9WdeWYf7uiBkrcdkJejNBCAC",
  "decoyKey6": "P4SMPAQrDQ6BxS1QEzmpv8NwBxv8yCujDNvacxezdgjLahixiBHAYQVtpBAk8A9YkjbNbTimWiQMPVogW1xUHQD",
  "decoyKey7": "3XGyEZVPvAUM9q1pt3GFU9cgX8bgFQiDHWhBF5TdMHR44edD3D5snLzMRr4zNaAEmakiferGBcmPV449csJfQ7n5",
  "decoyKey8": "4q9b1nEXWvcEEa1JXG1BA8yzVd8HMLY3fWaPu1zzyKxTx1Pc2CYj2miR5vu4hy5Q6BU5AZU3HyB5GdskouoQeW4L",
  "decoyKey9": "3t9ewMhYHpSBQN6JPrtRiKEWbPvohoGWbMtUccNoACrNDCz6mK3UtyiqPbytRoeVsGmVjipyTCAfaoL4X37EBHSW",
  "decoyKey10": "q7e8ELBR6iiopr6hDboYBypN3CWfv3A7qR6id1ufWALUo8eHJnHhD2kaUSW7sByXjqR17mrLMZCYCoKdZNukSvc",
  "decoyKey11": "4YkD5wCmsWFp7VrBqi7VrGY8SnBf2CHBznDW328v4e8raCifZRZU44ESe5gGojjBtEQtRwEbW7B5Sx9LVPHW9LoT",
  "decoyKey12": "54bsmiHjDxWMhGxKrnoJWXLJpoZNSEKDAJ1bweD1tYpiYQAsDFpugDSMpgjZoZjKwkTLNxJ4XAQrD4VMmnSZr7NX",
  "decoyKey13": "7WhbcC8SNjxtxk4dgrAWtmy3HJHz92Hc9HMveSg8AFTTFQTUK9zz1GY4653YeK1JtQ6AFW2ccAVzWzexzMvLFZr",
  "decoyKey14": "5RftLq6km7JTUDznCgYgPT5k6pZbP1JEsb9HxwJvd1PB2AFgXsf6VVr3NDfnRQQDcxyJCcekC8Nc9pp6zq8P8bEL",
  "decoyKey15": "2Sfy7165tJcXUhLu8tyvnT4axCuwinhNQzgJLP4uzxN8X9F2wW8vnC6mdcEAD2jV8tVpkZ7DuVP6bAnuCgtZqr5E",
  "decoyKey16": "2L2Lc9eppTSWRHXuirtKygSAxFmvAv5kZo5hEoLHWiAHBFgK1aRwbJhqaPqsy8tZjeTKvVuBqbgBq1DcHK5T3Sir",
  "decoyKey17": "2Ct2SrFhRQp1g1AvRYxBv1oA9c5YNWDosfs7xj8Ho9ss987LaUjWBTiTB2UNjYyzcdpiP3VEswJqrvDHaKf41ZPj",
  "decoyKey18": "5Ct3Y2W7u7KKpkLiwSvaFrKVocT4py3r2NJbpwWxJ2yAJrKhg38Wa46UPA43pSDBvZGdNLr3P3U9jnMSr2NNdR6C",
  "decoyKey19": "5gAkwhWodJG9Nmr3e8GaKawHncZmJT79VJaXRk1bYYNh7JdYEuwJjUX8BKmzjDCTN61Z8qvuvyC82xd77BtgdFsJ",
  "decoyKey20": "ZiGkrYikgkrEqZ3xR4cXpBUpfUDNSF7jmpSJ2uMvBBiXhR7zNoHpGbv73hhqq1NYRKEvrd6XDdM6wnwW9MwQSU3",
  "decoyKey21": "3DN5V1ppMbGDaggVdv8xobdyZ2j4oMU7D3CJu2tgJC1AE6KQRWkRmm7B4a1Xg8rtxRjBzusVnUSvptUzkVScaFL3",
  "decoyKey22": "3fvtdZNAhckX6ppyqhyTVnqzM8n8bmsbhFZVBvEG5dKhqUErTfZrn1qTihMkfW4yLv2sCokz6vTypUNG3fHexZ9k",
  "decoyKey23": "54FBJJ9wAtQaPYa3iuYzTVwQS6XAvAG59iERQqGJHhCookYW79Es74JrkcFEsNAkCh9ntd1D2GwLsqAXQg2YGtJc",
  "decoyKey24": "fZbtRoR17DAZA88HaNppKeiNsHWqaQh8HmqUQtJ2QvQdg2JWkfAzY9hCKG4pSLHNsNmWzAA7rcqzZscyGPjDX8m",
  "decoyKey25": "fy62jLMHE1gE4TrhX1u8NbXy99NYGEWnmqMkdo3CY3XdEgw4daTP9MTnhuGUPrSCwnjkRXbkNJx5cUAbVc6WZwb",
  "decoyKey26": "5v6C4p4nicC4BJo6hwsKC69WkC4RPT92w1d2HYizFDZnqZrPKUSUseDcH5PLvHp4bsArrifRVzX6vzm4C69ae5uR",
  "decoyKey27": "2KjUbgvjP4o1qKHQDqXB5VFn3uST5bT8NFHQN1dMjvp9KZ5nCCRcqEabSK21f57f7F2mNytoYQxe6is9mJCDtQqT",
  "decoyKey28": "4kWiRdL6UmnnhQ97QYhoaXvp18dErDFr3CVzE6XdigvhqBhqdvh1NT4j3mxEbitTTkRDKKnnPvgtcR7bkdroHm24",
  "decoyKey29": "2RUuEtnF4oNuTLotSkHYgQijm9YdhokhDWfVWUhpPVSHqcaBjCmRymmopa1pZLbDBzeP1tJbXPfS5H1Ps7p9s9ge",
  "decoyKey30": "2knMYQguedEdkzebpeFE2w9bMvitb8TEMhiCWxmpTcuwzYPjMxo3LcponDoWtSkoMNq2SADEAFGxFhPQd7hm3K34",
  "decoyKey31": "5KFBWNKWFvx79bB1sUZbhXeC2CpkNHnqUJ6ku2qwyeuNkXcDN5a2sunVsgLTnqm5Vioon5HSk4Sc1TgDspvUtY6X",
  "decoyKey32": "5kd2Z6metV3LxWzHqiaKHNQyxTYcbHBZ93tK8Lfu1A5VjF5HceXHtgDWUSNBezi1uvpXXXVf8saLxop4kXQX46iY",
  "decoyKey33": "5ygeTbFd18dkb9WZM7huvCzeWGpjimfJsPjDiEiRzn6pUT1qgXyj7Z2sitQbonsTRinF85fxG58yA2Z5bt6ieaeP",
  "decoyKey34": "dvbJLsWZ7b6XhYAyCbzwn8YrRsZyXrYtcD8wtCK1Xs24VFx5HKF4NTwjLviyJbCWWCDi9fFkL3K3ttfvqoCtCiL",
  "decoyKey35": "5EE91kaxgnkLjBbyknL8aUPGw2Kan1qyW8x22bUwaZj9X1d3RRp9G25xzAixDUXqZk64fEpJ1a2mXx6nAjN6DM36",
  "decoyKey36": "m7sPUrTh3g2jJfMCiPSh1reX665oeJQDaVzJvqPCbu1xomZTYcEvSieLpys97zvyrFxCAEcrHfPtdvJChkBBreF",
  "decoyKey37": "2oGJUAUkU7UA1W5MaET867Xb1rrDnbf9vEeT1dvMPufxUTmbbX9V9kzXK5VgtJYGNyrhmw47Byqh4iSNKsz9qPTK",
  "decoyKey38": "5gcgDu7MQwQDKsq3nSUKyuSTw7LuG9iJntrCG1zHpYNeUkp8t9PJiyYK5kzqqWaYQSSKzbHQEj7g71kuJmnYQAo8",
  "decoyKey39": "2Sx4mCT98vBtiS9baNs9HsRQ1uA5R3MJnu1myCYaqLAsCQMdWRpqjod6L4mxM1TPg3fH4iQzRsXjvy8a3JeE4EZT",
  "decoyKey40": "2Z3YqntLtBMyt9xZCFWNGxSDuijUDPJBV6Wg73WASNUfnWozZNToJoRMBWUiPXK8kYgY4iAM6AFhRBhyxhAb9gjF",
  "decoyKey41": "MENFXc4aP7qxoTwNHrwKn4K1vwp137K8Z46EpBN9r6JARXCkbLaf6UEfXK8uQ9VFFjKTzncT1YQ8fJapJXXrGg7",
  "decoyKey42": "CsvTZ94ng6iGujhBdQ2aa9D15hFrJT2knDMNn97gHHPB5UfaxyGHSLyjxmLsTiR5RriEMjhgDtkp6cHNdCqHMC3",
  "decoyKey43": "3fSpKokDHLMEs6omySpmoGt94naKTA2sUt5n4FFZ2eBzENQ1uZD44o2qZ3FwKehAN1kvENSmaBYqkEtR94pG4t79",
  "decoyKey44": "EfGnwi3ujBpXChEJ4HHjxZyiQAKEik32bqYpGR4Tj3ZucT8poF8TLt2NpDg1t1ax3SybGr7KiXihttYX99eCzM1",
  "decoyKey45": "3WQmMqWYHwNQ2xCNiB9wfBQ9vWBa7DNCAg5w1sGmKAdmhHkEDxsSHvrEvFcitusGHeGLbAui6XxJXzSFH5MWsjLS",
  "decoyKey46": "5iFTMdTKHXHK555946j6eu2LnssUsxg8UhXQXmJYtVtBs6VEzdEVQR5oTVAzH5Uuuic3TJ7WNxfw8TjuYssREFTr",
  "decoyKey47": "2jm61z37F8opbpjLSkb4M34psEfJGqAFDouH68VZdx5nLynjMsZvr6Yw1UEfAfRuHrccnmkoiTXx2HyNv2cDcGMy",
  "decoyKey48": "3eMb1hxXfwqyU8fbGntq3TH4ixkQbF5x79RuL9ekhDm2sx8JAbMRLqdpie6SshDv4GoQLznRnMkKYqsmhnwjB437",
  "decoyKey49": "4bDajpUzEUcqP4Zu5iLmAktLhqFVv4fXbpgJevL2E8YMLFTwKVxBooHDqqfmmPZ5H6WibEwxT5q8HxpwcSjtMRfS"
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