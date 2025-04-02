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
    "2MVRfyHgusW9kmpfRdTdvhV2Nz1amSJxYwMWF2HbSNtSjqCknWs9Me9k6s551j2Eoq9gDaRgotiwGTrnvcN5cGmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4ArEqDMXpgdZQFA8eQt3vunfKQND3Q9U66NHtAx6Rju2Q4JN4RsKNq8oyxyAZw5Ut2PzbLPk4ASNNCkJTpNfnP",
  "key1": "2u8S8ZHmV7Pu4FUA5yUytf3mxUj4PbzKtPoL4RetwRvaA3dequBdAFCDqrp8zQoo1rVHK1onfmAfvFCrqs3cYcTA",
  "key2": "sw838T31mNWLxdwjMi7gVEBquDgFq7Ja8WH1bZmux7wBooxLv2iSH6qUj7zt95qLNa2enrP1AttKGJ1XDcJRrBW",
  "key3": "671dSbGEfVQxGRG7XfELUAoQxWJioCp8RcsoWQwzaquG8WtVcfpwZEoPHGxUTLsusKuNwp4FPw7LafRxgAuHkPEf",
  "key4": "sN6PesVaQKDPqXx8c9X92Uy8Zt82Ws5fypET6xnwGYamqAKVmVN1rj63EtR28sHHH64DjZgzwArWUrzfpYaNZYB",
  "key5": "4bom4RnXyXsx5upbyi899JmREwmokQ2WsWTD1z9Mk4RsAYxzY33WWYsqTZP1cuyFnGQGSiTxbEGXtqKqmQux31dk",
  "key6": "CMt9qgPux44WBEEHzzhiiTq2poLtVvzghuMvjmKPYFCFRQaeicshVVbPmcL9uRWDCeuC5am9mjNz3AcCZKFiivj",
  "key7": "5Z5hM5zPRhtpTZBoWLbW6kUWCXpAcbht7nNV8u5nFePidXzKxicWMU8YYxPR3ZJGitSif6LwChPc4wHfaFkfmHAT",
  "key8": "cc1Vuodz7iQ13eBvMXv6QAwjxrVbDPbXR27TFEr31u2jAz7i7HsKubR1RpAtg3u3e1FDay3nNyGqhNYhYBFXFx2",
  "key9": "56V2eNrMCAotenc6Ao3snyWWSwLgTZsQsqfN3FHxer5np2jK1ydEA96su35Q3qxq5dSmREYcwgnwD51rRuk3ZTGQ",
  "key10": "Qob8mhN1hRyYZWcaDvDrc2KqAG1rKe894uqewHzWGUEZuUbUMBt2Z1XwFMfPxcw8b6N5nEGZpprsBE1xPrGB2TQ",
  "key11": "BbtjLTotik7SzCBMj5K4L9xanz8jCNFXEnQoDbD3uYy574N8emHrkbHf8mjxY8Vc93aNmAvvnjk5wdfPQPpgXoQ",
  "key12": "p5HVg7mVwAUC6riWyLQE39QZ3seSGSRJjJqWwkpWdKHTDVXafeengxTAL8CyE9fPseonqtbFdzXkE1EzQdmYwFd",
  "key13": "2eJw66hLozkYwboQ2DTdbz5H4tCw8QKo2SCYYy3kedFx7FcETyxTxzV7hdzGDfsadqcVNxw6mTRruyCZn6DdNK2C",
  "key14": "eqdSoawJYYrpfeeXwtM5VFyV3fyf4drPJ9qXqe9FsZZZ4gTk4sBPjHwa5ozWwVNjHJFBe5atdGM9cDD73qN2nPg",
  "key15": "4hUkFmZZJ399Vs1zdtSQyh4LvwmQ1uvQj7VpR3DZM9g6E7hW6q5bQixJu97Pfu52PT1FHRLfEjUiTaAxS51fdigY",
  "key16": "5aeQPPGqJXBxkbexHawu1rBr2QGWeg6iUUDawgstiAzkT9iNtLHCW2VVjSVsrkKRn5n2GRKz2SMvpWzPUDgd4ui9",
  "key17": "2apqVLfcAqqLJns133thodznufGHzGtswKixjfjxRRtsBk6FptzzyGKoA7BtU2vWemvhE9YJxgpKehEpBDU7axjC",
  "key18": "4mcRkXedqfq2uc45QQ59EhMmWNHLHsnR2PmdKPoAhZh3wCRF7fa1e5bb1H6YRjDaVR1KJYnr4wbyg9CGzyVN3yHo",
  "key19": "3hrgUQLyYHxMSpUX4dfJfjLTNHtKuBzokJPrkRM2EkMZ2fRdpqRU4wwgJ45pyjx3B8UMPrBco5DLDjuP8YBPdE9a",
  "key20": "4QPoCZVAo9hQjMJSMqK72huB6P6TFLKMGWxqQCwYpgeCkZsz1axArTCW4MQbfW6v1wYELNUVP7HS2EJPRXLPXDnD",
  "key21": "2j1RQ25ub8abGe7WojKS67ra4E2DY76XaPh5RMtKUJ9AsfFNFMqTdfwWK1RbVCuNiHRraae19Zv53pwcYFxyoSR8",
  "key22": "2rZ1TD2dSepkPv3xzotfKxEq8naCCteBhckf7ALzdfqAMytUbRYNb7Qh6kohdxVDqh5MHNkJuC7k6tD9vL1n7phU",
  "key23": "3UBeLhPZtxdC8xsX35NngbZZd8w3HKAMTZK4r6WVnpgimxBybRMW6fLUbuNYF4MN6HmegvRqaSbP1X5jVzFtz9Xx",
  "key24": "57qfT9RoK4NLhPrNhw5ffvhZFbx2XA9NPN6Vz2t1u6EQhR4QHtx4yy2W7Ze3wzV2YwJXGLy11jpbVeyP8137JZ5t",
  "key25": "28RTTKeRK3MB8D8poZf1PtnTqgfvJukpet4peTRviSVF1gEwTBb9qjUPwDyw49PZgQ8Dk7xNBdd7k534hVswaTBh",
  "key26": "2hnqSSfWcfHdrc9q8AG48vtjRNQ8YwTqvThk1dqNUw6QqdWSS1JAtmV6tS2v2yNTpzki9G6u8dyBGCziNT98Gb9p",
  "key27": "3eE4m5tj5Bmzm3fdxxJ4Uqrbxg4H2KgDupUpu63CKNcy4P7fNshMgtoV4n67UUj9csnPX6SES32cSd7HWauyGD8M",
  "key28": "3DNodcWuN9A3g3H6WkoXkKVx8GgjaJxRqGwkm2Qsh2FbqUo8fiNbxba3cSr1m96fvsy4gaec9miPaWuewJkRS1xz",
  "key29": "3fntMN4qs97g74KJASqerpWGajNrmNyuiMAWiU5fhT5UYU8ES9LLdKgWChaSMoqSsLTxCf5Hv4k9yEdNmYXFi1bf",
  "key30": "2hFHcMV1sPYjRdLyPfSGz1C9aN61TWsSJhsinA1fvYdbwyC7snykUG2cEK2y9HECasPkeGiq2bh9JUr94h52uiFE"
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
