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
    "3Bn94eHFbn4aBCZ49PyEmUVQCLkVaMCcyu5iQewjbwkPZDHakcjAKuDFpKNVh9DurnTtARGN49NogU4YcJmXzKsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61rGVRYcUqKUT52FNKWFLDQhactEtySWjctVopKb5VuY2rD38Lf3SMEhksJpNVFKpuc5B6jFrPGxsUNrPQvoyoHE",
  "key1": "kx1wmuqQccGMEb12iYWssoPdn6cUQsjgA9qbfYxD25sKmz9v1hdUdN6zJwZvwuVkGqNtCisZbBnK4eibRzCYVCz",
  "key2": "2A2ij6NRXytCDMsW6xstcDYfKg3TeCAjGaT64mkVSWwrt2ef2BAoG1HVyNj1junXxhezeAb1buP2M4mLBZVJTJyw",
  "key3": "3gwwqUCJdZLrGrHxNH8R2VKN6hsDpkJ7GJrgWCGStk6tpkWBtiKLTNSB1bcrNnz6BJJL1rHtokjm82hEWtFLtDLr",
  "key4": "3cc975nkMPuPkFFgoci84gaoErgHWGd9kXFBZdPknRwwW1bB2RdbrSFS9EUaBftsCC3qs17f8Qff4C88N5xvrUgC",
  "key5": "2PRnWS3z9iSnGEeScqXnUZJgg94Wh1mZPB9VaZqB28VzdNKYs4p57vkbwFAHC1zdrkCQoM52hHy19UGhEDx8fz9D",
  "key6": "3XyAHzkZLQxn8yVgnk8aC7tBkUwSPfL4syE823AQpEziinYgxehR9h1XgBQQHD4CpU9UfvZYyEWkuYgp75jTjiej",
  "key7": "6jqpckaXDAsJR7eHZqvb88RyaVYA5qBv7Aszih8JxKQHDvircdM4ku2oc6LTdMLzjJxrH7gFoEPa7jPF31D21pA",
  "key8": "2Mvz2d1BrPyoZJnTiPDrmokKE7vHrwajusmWHAh4xGer9ppFDFAxuiJkkrCvQ3JuD7CgoEVPBS9c2NBkokgXQ4dZ",
  "key9": "3ZTTSXUEGTYgwxnwZU3Ak6FWBerNswq4NQXdkitEWKtH7tEZ2GhqFSjqyLVehNE3kxBRy5xtM215aFb49HEMy39U",
  "key10": "3EyoWe8ZNtJ4eNoZbdqz6Tm7wiNTwG2urgv8MvTD87gZNVjUBVbrQ6bB7pkHyrjTjw9sTjBY9NmUp47fMVFFU9Kq",
  "key11": "24vahwpyh7oQk4i1XruYchBXTkcSP8NMnTBdy2aqfVqjLCbevJa6GEXF39hpXLqK8gZPU7LgitcfBo4btGr3TpAv",
  "key12": "XJGNTmKKWVjPegdA1XFRe3mxR8Yd22R9zxjd55iNwdkMCpQiFDLhECKFUrwttpYgjhcUeuGmm9VTxchMn9JcZPp",
  "key13": "2J7YeNshbFU13b1b8sTRahtVgKST2J4RDuumhWDk8St6n1xbUnVKyYPAinUzsMqneD1sT7n9FwRPKWMihG6h1sPh",
  "key14": "NHG54EUpB1E4WC7g6ZKELdyeqLr9rFSCzzeLXYw3HsGydAAZJYSwp15Ras8wQud15pZz2Z91TbjQQoygGqSjHTQ",
  "key15": "4vpjs9iCFXhng9G93nt4cehiKtmHA3stFBmMp8LAmmxZH93X7ME7c9v7idqbdMvn2ypg9ffZP1BRybL33YZ5n5Ds",
  "key16": "5DyECL5UkyyN2WsmhpJjinAYbKboc74En6cMiKUkr6xttjNuZYNEiv5RKjuXLfAUghwqra6AVGDPSfdFWoeLJKQ8",
  "key17": "4UQhqzLQFNG2rkagBwscATeuqAgH9YRkr5kn2N2UodC6wwjpKzch5rSmtqE2yqiA2VCq1Nvq6Gipn7emKt6ugPTK",
  "key18": "4thJK5AES7wyon6kSfVGCePAG7o4Js1CsEgYxW7yQRT5BCpcdy7Kkm9LHBiFtaBHzGdZbhYb2xK3wTsZQaX4qxq",
  "key19": "5CKufjUUgLUjBo3cLMW8Wd4gJiJqU8oek8qXZJKKCWjF29w3zSpSzCruauCr4CtkPuAUTkW5gkoCd27nbvxuLg5j",
  "key20": "2hVpQ5SJyFHgTuyqGZgzDG69q5x4FunZ1N98DrLGz7ajzcFzdDsyq5UwZk2pzmPqqwGZapYzvDMwtQCfCRB4pGy5",
  "key21": "4nuS7axk38VG6HYM3Qn1UmvyattfmSLMwfCih6eTX3rr2RkFQzacU3FUuD5hR7QM26W46AHCKQdfxVqfv28SqxFX",
  "key22": "4855GZVhAK5Xf3zu6aiifjPHXyCk4wXj1r3uvJXWJ8JdTa2g31RnEKwJaZD9vJAWHqQDGKrfndiDpRJ4p58wb6yG",
  "key23": "4CxJCpMTNWV4gwKa2eZM5vn5H434ZxGLf3HpjbmW9k2952LkyayX1oKEyxkqvNNZTTMu1h228G3m8NCjW2v8nT8c",
  "key24": "2n8J8WukP2r6RLm8NnaS6JnWBokijk4nC6Qs3wE9Es5GHozEDTmSP6azThnqQYFKrQofGdBgAMw6ZSGaoNujZDAf",
  "key25": "4S1ZGewarwzNhpFVAA9yKz6dRPiTfA1zVhSHJvmmDAvW2WgmzuKtAtYxaRDZMLXojkes6BFfURtjSYceV7mSWPhw",
  "key26": "3fauWdq5RYnafTLQpq8dkSeZyMDPA3Mz2k9Uw1gDzdgk74zQNMZS613NnnEdMqLSg3BYL4n7ZWEPEUK3GXktwZc9",
  "key27": "51hknznc7hWw5UvyqR8hkxHnYxK9z3VUxjyw49MEjDnH6n94uTQa5Y2cmJhBZrrCpRzqRquFjT9eG4NiGVeMpGZj",
  "key28": "4gnfEoiS4wFwHJRCXpy4UXmHCC2E4SHyZb4ppbLgUrt832nEUW8Hrt2GKPbWTkGacVpXV3USAZvapQ4pEQyxcgPV",
  "key29": "5KyAkxenyrkXjL4iSuwPYABV9deSR3abSYjmCixJmwE3Qd6VHKfVJJqXMHEFr4HDA5KYcqT6yPZYWRuETwb5sMEs",
  "key30": "2xPpAJtH1pDGj1jL4LpTdQHtuhiBLqNE2hEx8MhjwpjdusfkynVLCQt9ccKY6X6HwzYMptoC7V1p3c1DUncZGH4r",
  "key31": "3SfJMTtyc7wtrRCQkGHQwYDb842VPb3hdZpy7EtyVUGVdGAqznvGXcUAyKqvXPF1AXtEPcmLCwWSiGBABFzzYKTj",
  "key32": "5ppvVSGt3ZDYhm8Say2Bwu7nXx58SEv575hiADY9Zjo8h7yMqKMzsuXUpo7utfiSbBT8ep8VirweJazvcJN2kmZ4",
  "key33": "5jKYaQXn284e9fPSQmhvRHADeHFgLqaocxPpeKYEy34npCnf5eo5fQx6dXjeNPb9WQaZZeJNghxZpoYTSpo8WqH",
  "key34": "262hX2TD3GHuu1cdjLy1cJxo4ikRcEWXiGY3h1LPEV7LArgRPzjdCRnjfEvaZyTc3UDspBBnejZWx8yxBuY69gd7",
  "key35": "4k79dPLXgHpta339iPu2p5UvQSsVwPWL6WwC6JSMLVkF6dst5kfs6gzDJzAGZ56i6VND1cYGXWLGr9uuzYMLSTy1",
  "key36": "2pkzKkRS7RFgUxVr6aezFi2Hj4tGcrhsGqS4kzqfshfrq4qb1hgxBDaWF4jatTrPUEqd3UV5KzmBSBorK8FzJLBp",
  "key37": "hzNCeSkGgmfRrcEQhuBe8dMc3q49q3JA3TYCREn5PShD9BTbmJ6GbK2bMgotozo4Y7bcNXQ4uT2YeAVaHcqYGUa",
  "key38": "42C3N2ehmSMwnExe1bdpLpXq7qttqnjmRGaZvmXrWhmmNNfvY2komSMwEhntbcicG6MQFjnddndkmdaqujourraW",
  "key39": "5yawF8q6c8pXBsKLPzUvEBXxnH99ar36JCqC4ddyXV4CwUhHptwuvNLWUpFBf8ii59J4UjvUoFJLEYPCSq7HQLY6",
  "key40": "3qqZU6VQNfMhXZ7NniZeoeQFaikx5jLSKoo5N4bcLjP91QmV9hSMuwoFYedTSgt5UTEQQ8BY6PeezdUn95ypdNi7",
  "key41": "5hZRE6hx7dMKZmeyWdFKNzUgEdxCxV2vNcD9WrV6knFUsjwboc1V5gkzjjqYJ86prGwxDb4dYoVr9eccskYESbH3",
  "key42": "4MDCFHBamPQ7QRoH5htzHquYBWrBXY38jTnwi1zeK94FwG7k7tTDywy4GoWEQj6MstfTKU4Yaq3fSCmkQhtvAKfi",
  "key43": "2qEf6SVARytpDsdc8Eipojc1dPcsmoAbFDEiqEJgHPzwgDgcTNwzaLgyyuCAxiEgm96zVSpmyQurk2SuXTmXDf5r",
  "key44": "4pHTDGhyJoqSUnFNxyhAAtkUnGDpQeEej6erBUbxU7ChRC2nndG5wogHrbSrZMTiJzUnqhEyL84kcoeNokFp5RhR",
  "key45": "3TRUTUh2rJ73yLiSpKdmukJtb5mamGg54BT8h2xwCuc4iJjZxr4tzQ3xsrX86YhZHNY8fWTxqCPXK3uvV9BvCwv"
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
