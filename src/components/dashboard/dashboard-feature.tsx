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
    "49sCdSqgMCU6b7mzFHV3Uz4jPLJRLuVZECqtAKgLtBhqVJFrnjoGSSeaenvyijUhgvE8VmckEg1BkBCrG8VgeZDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fhqdeVNxnRjRzaSRq5isnRtPwzr6XBLrDT55g8MJWCdDLHeEsU6ofGbP8zwjeKPRgNhhPNLnVrtYZyzcTE9znc8",
  "key1": "2zY1cXHpKUnq9a1Br7BymZ2wkP6kZMiwVX4KSBz4TzJUHrw2jneVqHer5LNzP7T276XpHjjygFmC9xMi4eFnP54X",
  "key2": "2JW6fGWCdu7ohA1DYrToc47N6UD3tuwFHtSpcqDWBfgNWaxu1UxjzGvdy9SBSLZjeaqyjRghTT3udmPd35atgodw",
  "key3": "6BYn5c4dZ2gS9bqgTcWgqnKJU8PU6w3L66q53Sb9ZbdwSBo7KWVG2DAsWwvMrY4oiH2ReR2kwxzVfMQM98XRD9D",
  "key4": "64UjaGt9TXrSyuSDuVj4VpdrfsskzqcwuB5Mr5tGUQHjiPWqLEtt5Z5mbTwNMU3gZ8Hd8xT1dSaTxC6p5G3ZsmtY",
  "key5": "51pY22bW4xoeyon2XhJXYE861ZhUm4hy1KYRNasJXBa4hHBwbeNxkq15zWRRjxhx1qcTD7B11r4PkMY8uF9DFRM3",
  "key6": "3eaqwEKwsywPoAY5oQh2vKDu6PnZvT9hDZbs2sSooeg2XTkcpWUcVndnnrBD6VGXTxvHgVA8Eisfo96L7td8AXTF",
  "key7": "bfsKLW8dJ4r3EBnbGscdYEadbTCj8fvxgSbfcCk5SFXPH1PCcEFx1vfiiHd1Lj1KxRMcis6mU3Zjfv49X15ghnu",
  "key8": "3ftoWreYRFMDhDzYa4nWRAKjGh4fP7kyLTxkyzDepiNDD18qC59ubHz1sSP4L6Zk6JHZGsLHGSMc2mNpSZTiQz2d",
  "key9": "2EZh2r5yzGoarQdj39bW1qVFc6jSZcphFjy14fcSxdHdhT1yUDgosqYcrNmD3hCdcbJ8eKH4HV6E7BDSSoRuTKi5",
  "key10": "n4YMFYqopwFoFfdBF9TZqfU2ZPARz2ikEeXBfDW32jeJJyoSbC24uCNnkF81aXcnEJFsWnpw3RoALXHFRqbSzww",
  "key11": "3D5GdCeY3X8axhQtmsDhch5gEWUm7GYVpY3xhYtj5SghyKDgXk8BJMyMy9Ljng6zXPJJgvN68hpzJxrt68KGhdjf",
  "key12": "57Xdsofcs8Lbm3dcUPYy8At7Fc6GNVGFJSb6SxbxXX5vrEYm27DiPUnxPt2ePvdWxBTtxoJ9pJsphCV5Z3gPS451",
  "key13": "5vSd29DckdudX34cNJ56658nyUYvcJXDdedTuzhSeDNUn6L3J46z23mwbn97gAoVZZAdaN3hCyREFfs2TyRCVkwx",
  "key14": "3KETHoYFgQH6YT88n2tHNhgR6ZApjMCodJaY4yNBDoNX6iULHEmmKhfwqiEJ2AwVDZYfpx4eqKghbHHBzfsVnV9B",
  "key15": "4vaarm9UjVBdY6JBvy3BNyydYRKLmG1GLg53PCGWXZNqFxBfe1rbb6d1BRwmUrSewtisq57dKRnRwR64tTe7edWC",
  "key16": "3oCV9Lsy9qSFrbJ14w1BAWPde1yJFZ8ZFsE9dDdVUEWWbp5nD4j3whqVHtAp7Z1wERqXraEv6esfcDvTL4wwkd48",
  "key17": "ZntcQus2ng1PDx41RrZ8Weq7vx3HhrJrUDVBxXE8b1Eu6vRefNubzgzxsYZGVww4KxBvgdEb8SeEUMzt9ZK6iS8",
  "key18": "2psb2uJroTtGq9qHmHeMFUNfzVN4mUPfu1ute6R4b5go18Avy9aBJmiPnN3tu76kY3o2uYXrn42u14LQfvc3ZMks",
  "key19": "3ess385u7DJonF49WCFY4zSnbzo5pBd3QD1m5tYDSKdqLs9f4P5rz1TD1wgyC6jQTHrD437jbwDBVKnj38tL5sbv",
  "key20": "jEuyvkysUoRwxbgK4XG3EFfmcJgYFwCcbrjFvU4SBsj3CMkjxeYNanFiVTiM9h3zoS53ntkGcUbqFEhwr943AQU",
  "key21": "5vbzKjNP37b33BnKGJW78Gc6MPryNctYrpf3JchKzF7z18GhiZzoEithS237at1oPsz4FCRGe9qjv3eyxQYFnSDu",
  "key22": "45RfTu7tHiaStH1NXfhCwQCMYBGmfEU39esdn41jBshRwjrGNZfatAWzT2fekntDqwfr654rQeRKc42vSck3bvuq",
  "key23": "3sky9qNBVKiGewLtqAhsMdGxjsU5pg4H8QnZ4QJwW5oLm6fbobQjBNBktwyMffmTAXoDfEKo3f6ajjukjnz5KgC1",
  "key24": "5sE1z3tsxe1HcFDs667zYVXoF5nRVgNuEcVzXrN7dUJ6pRqhg9SZQuncW2nBwjsHmeBhh1zTD4u96qjyeC94BESU",
  "key25": "4DytwhC936d5kiWCpG5yt13YJbbQHjkiCNmHdEctk6F9u8HdViRS8AhiMpPJhkg1iyR61dWiNJzsNi1S1U7F2Km4",
  "key26": "5yag7KyVeB35sHBe8T1N1eSdmKMZvba4am5YMdAtYSN2EenEp7FoWodpRbyUpmTC7UaB63m1rTurcRuZCXgqmdoE",
  "key27": "Sg7BBVMZUVwD21hKvXc4hfDYJcsFG47fof5PNRM9tFaM1gUz6mNrTh2VLYFbtfD5vdgyXTtK4Pxn3UCfwKd41ZR",
  "key28": "4THdyCWufYqvr4rK87egLE2X9LRXYgkVnPP9wbZS9FTAA2ZB83Q1kCnYq8KnoU6WRi3XFNbJqQVD3aiQ43o38oj1"
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
