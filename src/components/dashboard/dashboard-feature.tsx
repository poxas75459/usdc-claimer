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
    "23gQRJRLYZG5eg762U1Sgq36177FWny4WN31g53Z7uojLcJoq3X1eJLLhzinwsX2Q3gtWy2GDrE1FJimXW2qCDDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eP7MRgfNwUc3i2f634wQu85juB19A141wu2nos7FyYeAvghtyJA2DnAMGgx5Rayif8xuwsxAVEDKAim6agc7Qj1",
  "key1": "3vFAVRJ1YGZBvE9bnAz59n5YDACNn9SSCADWDSscpnrNajWuTKTEy8bQo3yR5ba3CrZYAQ79p5oyBDGfSEB76De5",
  "key2": "2fb9XkyidSP6cHCwC9hq7TanBMhoqGfrQfUkGU7zQ4MZ3d7gt9kgBQCCYSYAdzTg9nSV3KMmTBSpeCp7cDhM67SQ",
  "key3": "3Vnx4j22U5sCpK6f9RqRQHxK1Z7oZDD1Por1zKGNxQ9Aju9ffR4m8fXbVWDDxJbUuXjH6vDYhoz3vr7MpxG5z2tE",
  "key4": "4gyS6PoxgJSTwPxyZf7pxuTiuR7N2egxdSCEpDBbsumXeCtG2j3bBYXjgpRcWwds7SVin3Jp4fbrsyfnWopJUcbg",
  "key5": "xviANgQ6qfJpLopLAph2475M3UP6qAjsXMM9JvXHywZjCw8wt1CHX39fyQY2ALeikXgahhxMnxAUxfWQU7nretT",
  "key6": "5eyr5qoJerosmVTEL7KZmLCLjfNnUvNzUDrMF7ivKXhj6Mpi3zxvyEVU1BPJT8PiDVJiP67A9zfo2wYE8NLRMzmu",
  "key7": "4zrLKUmcuch1cvcPmvwXmUiimBLe3zWbvr9CK3d8uvmLVu3mnX9GHs5qzRf7GUK7gWqDB8HZkC5A8PkL5Q7xjS96",
  "key8": "39pvChmdVD8P3kCskoWLdXtgbNQDw45o7fgdSwsLRwZYQctmDUynxYiHcGVHvgQzZura15dNp2a5KoTQzad64eUf",
  "key9": "4K8GP5ksZiiezjBxkSmmkmQJ3p4r9m1YbLts97roAvgKVRkA7GivPysoDErACKJpShDNJLXcxVfyQFdungSzYRQV",
  "key10": "51qF5nq2FMwwdZX7CiAVMPcL3ti7j9kPSZnVmjAccnF5k7JsXEXGasaPG23ooxEXo3yLcjkk1nY9ryK4SEnLVVQe",
  "key11": "5VqcTqHsLE53VYkGkzn8uNw8e5j4uhoVKdHDvfNZ9p5SuwfwpWcAEPGRZXMHNSMD58mXdXyj1AMR38DHkeYWFZHq",
  "key12": "5nRiHxrvhW5T4giTh2MYPzFRcDDWCgDRmbPGG7XF2cLNZmtCY5P2nVqBrD6WetmGa6D3tqByeZzesP1qpxhTR9WG",
  "key13": "2tG7pqrvakq8ofFMDEJi9w27jXCnqJEreJueDeQjXxPVCFXEBEzfMKF5gcEfwmYoByDWYYiTkqeDEKRPD8UDAtfe",
  "key14": "4UwCrPaJQHQzZoT5uoccCPFv44fuHiXEmUHgWuneRbvytMp2LEXt3zoDVr69CuyftVW7h9z3UbW1W9c8XZaLh4pn",
  "key15": "6Q4h8BEsyWgdLkFDNLroitUFEcHW1u5oc13jhF8z6HUdi1htk8dzUUSW9G9jVf6Se1kzdDwyPRo3aS8EZxKxxtE",
  "key16": "5944VnzRDVmp5z85nF3jhiQWcZfbmnDsvr9kHVVdfrGRVkgascom4opog9YuUFzwJXF3EELcXR6DKC7dcWif7yZe",
  "key17": "3qhvREv1hZteHHUKzPhTYtkoSFAJWzu3B5DorDQDZoYt5qoGqaUW6cYVbJ8U4qZ6bfBptEP321csjKQEFZAiiLEh",
  "key18": "4ctujFgcaFydpZ1RtQsuDSBTfxeetbUk3mrr6Zf2XbtuXDa7JhCcQujN3QrBfQZDL3TTu6DyC7jXmc2rGcP95mAM",
  "key19": "3wH6oEDptuGxniTxo2onv8JuCx1jTS2EoexnGALPDn9JQ7p7WKp5hx8cZzscH4qN8nmr2zwnHG9M73W9r5F63CTp",
  "key20": "TGkhKvZ12Xs61wGm6zma4qj9xNpwNmeiChXs4YBTZjBmzbpwaei9SE4UbBCRaZGTQKcya3WMEq3j4wobVgEAnUr",
  "key21": "4DJVk71BkpiqMke8zkeUsGdFvBwUK6XkcJaGyCqpa3SEY2tyuLFSA6dhpnR1EtguMhmyuhYKYt4MApbwMFgYjvcb",
  "key22": "4wGK6EZjTmpCKEdVu1GvRNmqmWshNmxzBj7zHfmV1pYsvL3aWaFqForSh62Dr2hKDWPizsG2fyAVWcudkNkZhGWP",
  "key23": "4TKaREoRho52YbY5b7uRnHheCKJQqCbs7FBk3c3tuSEjSrg85CSC7BNsUSbDohzpLXfhMLepYqrdyzF7q2WnrtNu",
  "key24": "4Hn971ek9Tt9eFncbhmV4uDrj1V2MD58AX6ngt16CxETMYeBqiYKu7mqdRKWzoVhjARi3mjv3HxxuAT9E1JP6BLg",
  "key25": "feCM2NhAW2pSkQ6KdFvXeEYgvwAzBF5mCWYTbHweoCXhcoqJTBrGogitKN9jt8nmC5yzvGjViJFg7hqsFeSmZkU",
  "key26": "5ehap5kVN1p2FHtZc42VdPTrifXQ9cqNwVrkck25L3KYSwhaooY6YyAgmXNN8i9SHjaRGQ21QmLK6eUswWvukwoZ",
  "key27": "5gwKUCabUAKnuWJDy5JA87RQYQsJr333J9Pi12ZfSHSbawSBvKnn9mLhVxJePAbYemhgCf4HoQ3jt6BYJJPyGu7i",
  "key28": "3i7RH8nu9ixe8irRGm1iUpFNYZuTAgYmfCZTmdVcSrpZcFYKNKULVNPrbcc2Vkt9McbvunoE2ndep1aUXe5TDHRL",
  "key29": "2w6VfLskodempYY2PjzRcFxUCmQmEvogK992QqWvzPgaah8g5dNtNfG2MBFDHxPhmvosTQD7N5X7TeP71UPsfFbT",
  "key30": "5Bdvgz6rf4vCPL2HSEHNrZmRhtLA6oNqpMG5d51WRzjpc7pFJfzTjwkccKr9ByoTjpryv5xXLrwU3MGKBjy4ixtv",
  "key31": "5pU9cXb44BFNsEV59Cvmg6SFrzqFG3L9qhRmkqGC4Sd6XA3EcM7waP89RoA8gqGgT1kRiCQobFF3o9v8VVsvEQgn",
  "key32": "4h8o7w8v1SyRKdkuPShkcy5t8KBMxTA9aFpuxr26K2DGAoVTrcVamY8DZjEqDSDJn8dTnVvwXV65ZTgmfgB2ViFL",
  "key33": "2wGha48qnXuFGpiF8pqKWbEzbb1v2jXr9rcGnuyrxK53DH4wxVU5mQSUbyJAh9Tm8fSK3NpgsM1X7R6WoZNgSgpF",
  "key34": "5H2FMMbTuw8vDVRzvaprNTrYQsZBGsreJPSWhGwDwPZRMgVzCuxvGVbU5hX1afLBrau8ShnhYxAdutma1sWnEYTj",
  "key35": "3jFeQERjLzxbv1fxGUsd3USJdvkJ95UtKC1B2VW31SsH16YpKGJxJDSbLd9T2gVDBAfudSE11CstAdesbtynjzsc",
  "key36": "3vRxRCMG6WAKEVF7xwaSzHpA6V2KHNV8PJb8BS6SpqM3pDvK5DXwi7cXS8oqiTymRDmW1Fon4qyUUmSyyrijg1io",
  "key37": "rECga4K4sQss7UA2WoSJsFCkwEMr98mofpxbrVdJ6inPCBP58LKhgPZ4GJSpUeCcCNCpqbifkYGDgmgjekC2h5U",
  "key38": "3QiU8iDEW1xmQJH9jhUKWXkqwgxzmGEGtwCffZdSEudp39g39NtLZ4F4DFwtfP1zBZ9Jnxg5RNU3xVUfRyZuQ2wf",
  "key39": "2C6yYYSf3iMVJBmbtxhse9tFdiJEeHKEUi99pF5bgVd9TFYvoLg8BeF4kVU4BdeLYckxWMrrZgnysXh3GpcBFXxi",
  "key40": "Vz1Euyb3QERKYzfuXoiAWk3JscaHrUbMTzW9dmgPqxN8Gvdij9dZ5V69sWaJ61jrsipBpMmiL9ZvVx4GmouMAmQ",
  "key41": "5wGk3JWsMyJVzwicrL2PSvncpyj1hRTgacW5VkXQxdfR5HZNRJhHryrAK7Mm2Bgo2ndGjUTBVdskSEVc8ECCpJaK",
  "key42": "28YLLvcR1znd8MJFZ9Mc74DZnTuQ42GH2sh4SgPrrN6nraWgJArABGPkovuYt2eP5QmA1t6E1Qhcyan35wDzVJXW",
  "key43": "4hSKr3weiUag9Lqx9d33Fsc9wXpXSKbcgRCzFPW3bWrQvX62FXNThtfsNXdoPcVANpQPYDxczxrpPauTipDj5vgH"
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
