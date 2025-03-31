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
    "rZ6Lux7ghkvSRr5nEFhSTPVJijtAfjrUKQFs9wjNgwAJmcFoEqS2iormfp9hxamZieb7iGa56hCGPNtxT4nkdAM"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "R51FKXJGiuLyDdUsx6GEu1u198uZrho3r35AC7xvavTezHJx9YBxeGVD69avhnRjcqscDRtyQNPSDPCmjj1sqiQ",
  "decoyKey1": "2GSgLJ4GN7G7sDhhMjgK6oDAuE7rcqjCUj4uB6vJbLrRzvnWc41Qvg6QtxfrtVFqp9ip5Weagf5vYjGet33eugTL",
  "decoyKey2": "3diviUTWcrV45QWE686oszoLaUAxFhKfX3YKZwzLYGsEys9pjWxXjuciM7qgVoDse8aeSupU3GqH31RWMR7TbTJu",
  "decoyKey3": "ze67rMwrsVrBdffGDgsiG7fQc3r9SsGR6py3awH58uBVbEWpXaFww7cBqLEyGYkvnPs1koryWDcCHt3j3rqbbgE",
  "decoyKey4": "4NcaUqkMfPutv8jES9eccg6fctmVhT86NaQJay2jj77zwnmF1nxojYi8kyoe45WQ2HZWHWnhWd4ryQYTGeB1o49G",
  "decoyKey5": "4iQtbCHec5QEkheuwLbci5zC4EPgYN47KQcepMkgrEqc1KSfaJD4innZh9QqtqC2XdxELKXjES6TrXGCiPrFAYaB",
  "decoyKey6": "3NfUdNKm5kokymEdbfxkFPUdz1w6Vpr8hiR3h21spp9bgoxVk8gtYf6vmjToFgj92VPF9S8z6XUCZzAtCnmZQWBV",
  "decoyKey7": "2JfGfzACcodaCQctdmJCxvQCJ1G6b8QtDYBZRQr5q8jSEdnsg4emXxE7tqL8wnWHst4dNafvJ5mif9cz74rA1U2g",
  "decoyKey8": "2QdmbzDJ4eR7Zxj6TiSnmoSTFpE75jrwcF7NPUzN4cScAtEjLjpxqaJZcBusjP4XNisGE25G43uEcGkJonigpbeZ",
  "decoyKey9": "43zPsPuYPFaC9dfLD16379oq4kYMH33nf6btEtikczMrcxXzYdBe9R7mYuoirAdN81MyfR9rJ789AuKCPExS43cy",
  "decoyKey10": "4wiwAkDdGLvfzYufwpX7stLpTgnAtfLUgJk8GLaNwoLx39TPnUSQjAhCNvzsrk3NKfT9DJwLDzErPDthoDwZ9YxT",
  "decoyKey11": "5KigyW6g4nAxKmSo79dEAmd7hJN1HeJY79LcYuA1M5GCGubgyMFgR5u2bdtU4xPamnrXXDi8qEBDVg9utrDRJvg3",
  "decoyKey12": "4Nhs2ni9jL4uYsF4Sd7BJGmGFHHSU9fv2h1yfpQBKZiRgT3qQ3SCnpoa42UueiCz383MJhPFpdw7aabsmzLJGTJH",
  "decoyKey13": "5br1U5xY2RrmbVCCQkaoSzsz8HvUCxLLWWbkBFgbphof4gqET1zrTNRSRMK3JyJWZgeTUQMDH6ubDy2oRYAXe8rH",
  "decoyKey14": "32rArL2tz7gMs1tgHoUWwP6PNXKjHae38J8QKwroTtwrNbE6rFHFgKoheFL26joEyTN22jJgViqXvUfDotekMg98",
  "decoyKey15": "5u9fEMRoPC2CT7Rn4HjaQmyRZvnnHNUVKJUeYdCeigrzofRhcsiFLwGahV3q3cipjAkWA8o82iFc8HG4op5S5X58",
  "decoyKey16": "5xVBgn4pZvow3osmHHURnbzTtPHUdBTwSpjFzHBTsjWzbfH5quZgz4dzxNSDcRSG9Hx5codJSMP6QRcXsT7EbEf6",
  "decoyKey17": "3UTrfEehpPi7rF6QVN88FRH8bVuTGZ7t3hXtQsK1vxDc7et14aiKS3aHsSB5FpVHBvAZaZkGW7xCAw4qi9xeXzmB",
  "decoyKey18": "2SWPzWSNQmhoKh3KkxxYpmB3owtQDDXb85TpiNgSSLj311V12dnKQ9X3zZUiz1F242PTGCvJTHgUnu3pPsbnn5Sj",
  "decoyKey19": "RDQjEz3q8iXVHa7KLSMr4rMKQsT6M1vUGgEUxy9zHYaDN2wQDU8KrvqCcD8hXkYFe48wcSmSUfFZEk5uUC6LNYx",
  "decoyKey20": "y7cEP4N8Ze1WF3mA5KQ6S372gRnasQSVsPh9CagUdHdeRDMq2TKbGdmQyBo7qVCkvJtnpKJr7JjNefxTVchkiQm",
  "decoyKey21": "L9uw1RjqpgfAwN7KgyjVq861HTM21Lp8ckgbjArEwG2bQSvAFGYoJdwtobnBDmm8Ai4C9TzujQDW3cyU826rQLP",
  "decoyKey22": "3k2JdZQM15JjGnWw6aXLFaxrQyST8UVzb3ZhSjhHpuDo38jJbN6iNun798DHJQf1VWuaCW79RJCKtFFE2xMm9nij",
  "decoyKey23": "2mK3S2bUJ75vNKb9kp6TV7UtkCsLMzzG56ujeKBcCAMbx3vt8jUDCw7wjQKUMjDmphsGyCk1trDAeMukSvAUmZPo",
  "decoyKey24": "3rBVVV8dg82QqhhbC2qfxtUjCnVxk1eXVPvKDmMtAw1ZQPvm8KFjFU1kiNmkwCeT9HXweLtEYTwtJWqV35y9j9Ec",
  "decoyKey25": "526s87kW2jUwYhtHBaWTgV5Kf9WbA78C7zE6R2g2YnYfsaxvHVNYVbuzk4STvVK1Nms5ixcduKs9L6L1Mbg3Pk2e",
  "decoyKey26": "33qBv5dJHja15k4w7LGAX6XdgKPb8rSeNVZh8Byjr3JizaT3VrDVZEpoBoLzgQtEPVaNNUE6GzSs3QyVjYrbRGYd",
  "decoyKey27": "2m2P2CHnQ9M4EuzkaAwhhphJMUNyckM9KYLb3iL7yvSp5RkVTNvJaSEFxrzujiGnJEpg7dzM8Jvh6ruUskinSvS8",
  "decoyKey28": "M82RLCTi2PetHX9oS9x9MvHcRbKM65U1LS2mKY8fE93qKK8Du3XNRW6z32SJ3jhDB56J2YmCqkpC7zcp3XMV68S",
  "decoyKey29": "2SXWe9W8gNiKNrKsd1FHu2R544pMq6LXqMBvS7aQrqLAsuVhFGZKgRcX7LkDWr3QL8sxzj9a6WWWkFzY2pYkQ1tc",
  "decoyKey30": "eD1sUiUDTPb3Jsq7VLCJctdGxR2Vvuk3WMv9Ptx5VLyPZH6HQ1r6fpkaDTZgeUHCmUHyMCCXQ9BcPT7nxarRMSU",
  "decoyKey31": "432Nj7NCqt9FPpin1ACqbBNvgxAzJVB61pWFiyKFtX1WNDvse6R6w7dGZs9PVfEwD7QCqGsHVSUv3gJQu7wZ2Jkd",
  "decoyKey32": "4x8BZKy3QfB3Ks7KzD4sVRove9jpQwtAML6yPuUeEDdr6Bsg5qq6GWTHbgUNcaMyJhVkz3zWnPR3XjXxArX3WvzF",
  "decoyKey33": "4AKTQ9UN1DdTqQxHdF9Wvurk5kbzFDaGKKFTntANPaqeJmn7nwxzxi6L2MTBgEZs7MXtYFtZNFqTgF8qspYLkvNd",
  "decoyKey34": "5kajp4HsPgToeqWGpQKJsUBEoKk7K2ooNDfVwLNE8Wsj9ikqGYeM1RFEy3UqeBWPkv2SufNbgSAcdY7B5UohPVn1",
  "decoyKey35": "13PX1zkxFfWgY15sFNKhcvKbby6CqN23q26Fh5UXsA1VB8DQtP8dyTbJQgwsJvj54oUmhHFF3d193Cpzeafqock",
  "decoyKey36": "39MrfbPJbUoEyLYFBFFaSdcNWsja4mfq1v7siqZocqxKzKp5aEEWo6AmdN4DPSHEXSWGZZfemQG8F7TE3eqnuYX8",
  "decoyKey37": "5q6coBGyPhv4sVxscdJCRTkoh5kT6baVHsGTEZ6XzqTgwNQyd3m9w8XPpZi4asadymfSSikhGah7K32Uc6cf8k8z",
  "decoyKey38": "4jedCthVnHxirbaU597bVNoPt8mXrVcF157NCqSEGGsz9C8GtVTXvGgjan92SwT3tvmw7ebF7u7pF4SUy7owt7ps",
  "decoyKey39": "3qvVqKPYcRokFpdsYsS4hb5c3SB5Zh3XyRpEdnKFrTaQBrqYKGeRuMjqPoE6BxhvEJx9286P84eQCkWpjXkrvTgN",
  "decoyKey40": "4QoHWRvanP8BDGPuE33amFHPkY4MFEBsivSiXrvGZDTLEs2JNM8sukuqCisvi7LQC9HTqZ6KrbW2otPkXtUaAuPL",
  "decoyKey41": "2sKsmcmMT7SRqYpDfFfsYeSVhYFTjPDhyM1eRRSTYKcrYXBoGkALdohcGrWb5dGAUS3dtP4EDSHyYzrACQxULR6J",
  "decoyKey42": "3KENuf62fjhyzDgwhUgpXeLgtmPgh48MvLigFzi9QBdyMqCAE6mrw5S6427hi9wyM9V8oBst4MnAsiaehtP8d8mh",
  "decoyKey43": "2eYKcHwPq7pv3fGSYQ1Ttsct4sb3uZ8NXW9RpqnSnXwr8WZUp6Li4RUAF1Yiss3J6yXdB5Q95otiDGgs9vo5M1ZG",
  "decoyKey44": "26seFbHywK78TMjTGLwGeBeVRJsGdXmnAonNJBCa8ULKuANWGroYNMCd4CkB71MgxE94dpX3M3HQJUJsqqmM7frS",
  "decoyKey45": "129rbUErFtMZJhJbseV6VYt8RPsozt1FERifmizT3NhTrGNCey2JdG6eKvXQPqyoeDnwFkofAPXsmNPRNkvemPQU",
  "decoyKey46": "2mPZ9Wp2zQpgoVvPyhEkac2FPsF2MHyt4XzT8iXoYx1YQz9BkXumMwW9yXwGiGNReiFCFtQJPWVCtmncSw7kYmmM",
  "decoyKey47": "QS4QYvLyduz9RUSP4kNtZUbnB9nR25iAossfLrStwbEw9nWTShiUkNKbwmwFRH8vuNzfunqACXAncmqdzbo1KPf",
  "decoyKey48": "4JHqxjLYnjFTqa4xua2aML4fSdjC3ZgvWcLgvyYZ2FVKGpQcwdAtdQpDpp81qJU7SQFQEWFhJzaopg13ptNDJnRk",
  "decoyKey49": "4H3YRcecYYcwoeZgP2BatSK5Kx6e67SepXqs8za1xpePEjuQaXoFaFbFw8sD4HBiSGYKChcDfR48HbR6nh7MgA94"
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