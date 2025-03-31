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
    "2MM6d2WgyA1BGyVsftoJcjsViAepvNrED3zMYWpqp6m3C8uX4kzZXafoAYWBeShY72YEW36Zjd4wkWZLgoVwcmXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49NDU4hSu2zXV9HWANKvpJWkLFfs1iHXxKVuSG3dKtghEL5kobrkgUDwuUwui4M1z6qGepUf4qq4SE25GAMSGqYZ",
  "key1": "5YryfwgE8RycwFnpKH3DDqpGHpsMhCrGwDDt7wgUNdTMiJwJH5BcbBPD54NKHiemYYnBAzbmuRWEhtwwVqKn85jV",
  "key2": "3d2gk4az3JT1aCegmNShAWE3fy7m2NtaoASGFyAV5V8UPwpSYwFBugc53S8Pu7SaETrEtiHsZj9yz5GdVv38fntW",
  "key3": "2aasxCdP6uaJFKSj7rYeNUu9Fn6uo9AQHxzhj7pD2kMfDhAanpxcwQqyyywohN4SNSwTgGZWe4X4wrNj2ygZm3f5",
  "key4": "3gLsLmsXv9pyYi3rt2tbfXQRZRugSstYG8yjHCwrEZUyyzDwyEyJ9TYRWiyF6j6mN4RyYpHAysPUjbt46Hfiwcc",
  "key5": "3fj4zGWNe76Kym3XuuG6voWdUALMGKLLytdfgrqTavBu8DWRAR8MrHSgkGpLTaY5MP9bRZfuyCW83fvQ3WKLPqCC",
  "key6": "2UTbzocxRGyo76u5FMVwiHaQkniRXJfiNuMUFd7DmcwEoxfVUeLms2aDE9ZmxKecghTQuHPGCGyAB53TvqiFUA2n",
  "key7": "2Bs7GDBYVj4afanbsBJAjMT9Xjs9jiWLBJwj9DHDhj6ED6TyLhJVGXZznQMAVb99AwtBBpx4aH8dikMmnkMjrexC",
  "key8": "63QXEUkbzysELPpawfonVGup71YLRbhF4GNaUnHm2Nb6vbvdgyYSgsgFTaTBFYzwPikjE8WCVkTbk4GFbc9bKERj",
  "key9": "4hHWh3M41veuKiWKpqaNuA3mJLRMpJ8AMMj8XzFTbzvm9LajGTTUQhVdtXCyGh2Dqo2EAwcb5uVdPvecYP2NY4Lv",
  "key10": "ZVCnyv43a5bPy3YzcbFDYevXZyRmwnVy1Nynk7otpeQte6BbgMswHdSpKaxPfh5M7cniGdZEyaJfvKKoyJkCqWy",
  "key11": "5B6mTosHCrnQBFuASc1fT57e2edeMrgZMahnEnb77nMRStcFMpaxcfXJWGYSUFZTejtAzLo5F4PmQ1dGX93YDr1j",
  "key12": "3daoXaUNhPWmPxcZCPr9X7adiVsoSi5PB9rNb1x1Kfxd8oV5DJHn3tsGEXEtGKmZoxMBfLvL3dyErgfcp5RGnSQX",
  "key13": "4trrLW56wdGN4ACee33871nnkijvixQ9Hdgz16nhFsRReXvHxjiaJyBzEBbewfcLfaqK7G3biwJaVw8UPgzrBto7",
  "key14": "reg4NJW7h6a4nmvjW1xDKHw1pHmzwoLULN9EDHRRYirCeQChFwtze9kBsSn9UwefjotZqZxGhBVL6uBuKf2YVaK",
  "key15": "4dJEsyrZwZATricstLzk651UZ15ngaBd66B6FBfpExdwGKD2k2Wh9MX3ugzQqL9n1JexzJG2Xf39akczRGAFz7Gd",
  "key16": "477KSCQoQXcKUobDiL69xRP6LC57P7RX9UZmK2xwaoBN2Zz9U6kihhmpQHfpjKzPDx7EBwNTs41WGfgTpA6iz3V",
  "key17": "2syKN7Vq5mGYGLvc8JNw7TBsrfpbGcfRDUkTpsU7gMgNuDEUYqJw6P1Vnpdjr9QMG6S4ivmZZLjnBGzjktMTbowd",
  "key18": "4hSi8eyUMT86D448GRMJMoQuHuSK54AxYsXnxGdHo9twDrXjZ3S66qnBxSL2QXcaQyPT5ccYcQbEbGZQhMe8ZDTE",
  "key19": "5N4ie36mMmXmwigfXcJHfucggVDs5dxY9shVPDkpYwdtwCWem3HfNVwfKXYhHEpGTkisFBbexWS3WiXm6PcjdsU1",
  "key20": "5Pr5LwKWz4wbDvQevy64WTyRXLpGVG71TxZq7xBvUBiTsdZrxMP58BcuRdoSd5QaEuj5PMTBoymU1m5FSSW3iJCY",
  "key21": "GyxofuBGs2VrF3LvqB5vxPgAu891JPDaVBJ6EQH7HXWfpPNvWYSNxa6xtcErMs3bjdPbyjmxqN21gosocojkEde",
  "key22": "2njb7EvPGPtYJt7Jaukvw7ws7wrC5LtygHLz5uDjSwNv4754nKXVaZGATFBFVEV1fDvN1tFw39uhXfTeD1x3Ltv7",
  "key23": "2ZFUpReNK397zsTBm2dnRjn1twJ1vApUeS1ahFvm55aGdzUmYyAuw8fa17kzcNBJU2v1AzAnr1NjWfEMH6F5jEQk",
  "key24": "pdzdRhpXW7Vzw5RQu8GpUuVMBvphNXYBPhsrf7F6ySoAqqQ7P7mvNG5yHeKbzDXwMmra5EfeJpEZXbZFgX2bYtX"
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
