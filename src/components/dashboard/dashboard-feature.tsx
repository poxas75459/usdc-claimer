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
    "2uN31TwAaQ4TZzmf7AVf7cAoyWo5inyrQ1zrLyjzDHtW1BkrbRkvuMkj3LdRSMDK2VmE24CUWgRmCRzD4NBNxxA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZmNrgoTXjdsaKfQwzSYnUKygExaLdB7hf24LWW5YjzHxd2apNywF9Fu1UTVipJionR3bc8hQk6koPCebbfcHpke",
  "key1": "3HR6umvvrfttZGE2jtZq9GwPRSqCStMuGoN1qu5t2bpjwKPhSMxyjkNiP3dAoRzTGBu3p9rJs9uCnVY2Ufes2LXM",
  "key2": "66E5Gj3Hmm8nP2duW9EeDAMGfRGGBqX3jZiKGVCT2URmtTpbYwNyH5aYfwsSRdgRSVaRyiCt2EA27oJBfcWLXAwv",
  "key3": "4bpLaA2X2W3PwyuFaant4eQttsNNro8r5qbq2ffZY5NQMJnmyKuVHTNLXzEh7j8zJu9ZTiY6BSw4FxdFnedcf1uu",
  "key4": "2xtg6FfifQgxZ7edzgMEBg8WhYTvYCcwMHbf5yvdCzpCGKjU6BTwWaY6UDEU6XfvG2cVwq9SdubP2hRVZPN2EG7Y",
  "key5": "61WVGx99ESdinvYUA1J3YUdeyJpUQVaDTePkQtabQBQcamvuV3X9CCGN2TZtCgapGSJf4mfEJnmNpQbwxQW2aHno",
  "key6": "2kSEfiUYXtLxe9wxqaAuUYiUcaGW614WgT4wAKE1WfU6PesPXXqxEhnXAdXDdhAtafnyzLFAzZZvPSbDGHfWb7eL",
  "key7": "66r81FwVh2Y183miHRR77Q8ZeRnXXcqK3aevxYtsk1o227RpUgd2EDvHWASv2xMK2Di1Y7DyCG6fSnZsCxHhwbit",
  "key8": "5e7RehrFGmhE6WeSNsojgLs95CyUh9dZLoz9jEHgVP7qAHUXjCMWWkHJin1cP4vaeLL2SpaagaxoNaqwe68cx6z8",
  "key9": "4H81VxsV29pmH1xHSMy69oFYwHcDBCpNMGu4krpSvxEfv1whP5msuvUMRv7zf9MSBtFwMkGRKUHDvxA6wsEeJrSn",
  "key10": "4TKwXsAoNknGy2cYguDqFcjcX3bkmQxi84EmAUscZ23mMTh2ecMJjkPT1XsGS9Vip3abWCKELZ9QEjre8PoNAAuw",
  "key11": "5WcQn6XzJfScRhCoVFQfNRZT1n9nt3uoQxKeE1n6VEz9PHZsbASCd3V1CfxaC39GmgLumV9vABLZLb5V62PRJGHT",
  "key12": "jLY1L1YeeAoWe29zjeQLnT876Got41TWzCbirNs5ea1FeR33Zb6VHopuQCppaAdqRdcVhJBq4EMm2dW1qVnC8qp",
  "key13": "4KpoDnGLyv9cc5Vj5ZEgnDMpnLVzBtG34TwF7SeoyN8JiGGpSzWMkX6jHh1T2jpLfzoNjfpHxftEj2sevZnDQaMA",
  "key14": "5Nv9dseKVo3dUroWRmCfZVqEfHgU1YesRPscNb9ThM8fFDn6ozChi5xswxqZfXXwKxe4U22N9veKbuFT1cs38G6E",
  "key15": "5xkFMyt4dEK9FK211EjFgKtnXrNhNnXQ5wMZiTL78VWZQN3swQcRVxf8S6uwe9HyWnMtgmGR8dfFD3U9wZkGSNa6",
  "key16": "3vfgZkNCJv9b4qv8Bqf9FV9W36rVmCNVmq4Nry3t9xC9HgeZehFPTemFPW5szv8G67FiTZnT6uw1Rb26zcS4RTqE",
  "key17": "65p5YS9ogkCGdhBTrujqvoXyRWLUPuMSxYaSNLvVRzvJZcMLgu7TguMA2RurmkTN9ew1HMMFtwYQCbtw9FVJXQZp",
  "key18": "4FqXGWQTUFBhTjKxJyr9N3oamVAXLHGcvm13XuoNxR8cj5VxsvXUajvX9FA4TzhbkEVVyNQfJTYALWJCRN19qSs1",
  "key19": "5efbZqGC84shggTgaUrppBysUAZsYhWrNXMDRq8fWCastJU1paSSgMXbh2R77CuQbRFFVUSiTrevEnLULsiz7DyJ",
  "key20": "5j9bXvWaYXPGnNBD82hH5JKiaRrFqw3HwaP7P1J8k8aMvccgCFfmEmmVpfZcExGLQqQDN2w3tmy7FHSZqSBRXxVB",
  "key21": "4tnMqHeFeZug26RiN67UJLPRBD6ctmhH7cQBu7L53fQXB9nxBS45QQSpvkKCrLLkEQq3p1SNVFcUrFDvGmH9iYLe",
  "key22": "4BPpMUFXfGxd4732kL2FqzuyDWkuApMqPLY7noAyPKSFKLv3gq5L5vmhd7Gb8qggzQRh4rxzZCtkRTA3RaYEGG8V",
  "key23": "52SoCR2ooCxuVzooep6QotFeT3yn5DH8Jrs2pbqGVRCKZqRH6yQdqqXZPDxXU9xdU1cJUspiMRrNMw36z6FJFN4a",
  "key24": "YpMepiM7qXiZEbdTPQnZpXNNJSasYgMj3bhjzSFs1644phz1nKwZGMmBRiGu7PHMU2BnGqH7mTBDBy6Rac8njJY",
  "key25": "3dyfHS7pAYF8NtJPWFJXaw22eXguRTojzQQ6WGbpw5KhU3zG9V7XofssBW9YxaWJrJYpUYALqcPZ25ZxQKMNMo4a",
  "key26": "2gjpYjqU7WB6MHXD6JmxyrvkZhZ6uEuu9XH4iUpxGzjZLk68NRDLWdpMecuByQQa7YGH4AmGARSZcpPBuDxrYSge",
  "key27": "39mx5WJ1gJunMiaEedxjwdchmGjXLhMJ4qvRRpT67nMrFbxZr2ZMoj2WURZNv4s2fAbDUiDjap1ZrbAYT4eHexCn",
  "key28": "qaCKChFX6iQudCgf5e7Fvq3MjEfS4ikSQgVoMH7xCqPRvpi4xZjRCthAE3Hd1tM6xH7SRCKrQysN4BLWzWBDbbu",
  "key29": "d1J5AFr9ToTvPYADWLFYBQpRMsR9M9jZK1ZV67t2RTJYjxvFAEBWxXCTPr1gEVE3UwY3frz6qpLfBQeNDb8zeKP"
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
