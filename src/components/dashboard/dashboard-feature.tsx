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
    "5FAM1rJWyvyGfFYromPDBHuZpDvfNAY3792hpnW1Ze5qfu7z2ox2ZXRe4TVYR71mk3XrFydtLvAnKdcL9eYgYwrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ijhuU7c4uUUKB4WFJZ4U2FqjWumNj7eDMPc4afkPmiWemZQ1CQMZkt9M7zbmknQVfxAKYs6DpFX14AX68smBH3",
  "key1": "3J4mCXF2iQsMgMoNiDn4gs8haCGTh2mbum92YcaBGkGGvujv323oXgPza6XMzL4EGj3qnpcvDhrMmgVi13VuGCb",
  "key2": "4imGkCexMEurEDagsk5b8dp9PZfmZ6EtZ4kxyZb9dX2bohCC5pHvjsinezd3NKyYutC2313ppudAgvzk6RKabnHw",
  "key3": "2WJP6ftCK271iGYmcB96gPt2eeiob4QpzAGBWnjVRL3xZUTVeVHMsTt3KHX3pfmBe2h1Gdh9aZHVPExuYq7CBfsG",
  "key4": "3Mk55dchzZ6WwzSH1JnjFKLhkZvL95YgvjjXZ5jnLnXpm2HBnN74FhhPGhsqtsG4ML9uWLV3Zn41Q9oQt8ZZXC1n",
  "key5": "55EVRPkcsfEgXDXLo1gioJJuoASBTgT8tMkLrN388TvripJ5jX5ED8RHHjCBcDs6c7fh3UjebzF4Zcyys62vMxEA",
  "key6": "66b84FLeJjZtRQxiSdUtb3wsVAhWzXZDKWXST6E4K3MBpP6EWUi5G4N18Ywf61Ey6r6ornKSodYirk7p8mHbmhYi",
  "key7": "66qnT6qFNnoWRCZ1te8rS7YfC3sNWWutavk8SUGsakMfqXUimiq7muzEiH2sS7fsrUVQFFKF2h3mzkvK6ZER3Mtn",
  "key8": "2N8R7sJByuCs7RZCurZgfFciZR1gnoyTBA2rHy4RzFvYz5yUPn8gXuwcsWtVN4ncYGueHsgnhrT3jVbbjY954zjD",
  "key9": "5KDFQGB5Cq79JhNX4m93qT26cE2sRog6m3ZaoR8vkZWDqdW2xzcDbaqkYnpU9Y3VpXtemEYKEYsCHxHo9mgpsuaj",
  "key10": "4LStG9Eq3XmbyVeHPFXPHB66NdmrFr6cSzYFJaPqCFMNeR5hwmHUE6xB5BxkexQ6A2GG82tL825Tzfy5McvoYapF",
  "key11": "2hb35TyiaXsLntiHzMV9F3Tmhxg83nJTCsm5dPuqSmiCVogiz7nFYYhc4Z2ELCDmGrKqR5xgDvCsrvPtj6yz2ZCs",
  "key12": "2CGcSewKXAW2QQ4NFHusH535VCzEBkKSWGyxuiifDAFYTuhcoLwzKZvWjPb9ZBdj1NePWbS7xv1p18CNkSgAqnbD",
  "key13": "4Pybumuh1PZKLPwQs5eZyV32CVNF5M9tb4K9BL8fRPpe9J1RgihgDTd9hLmhNMzAfqBN9YeF411UidpsKA7FXXKM",
  "key14": "5oA3HRpt64h5qs3WJcXPTiGE2j3aJWVEYT2q7k9gdmoNGbLS9F4dp3LEnuUAJWBiaWa3Q1uBNHmGnwHXM9orX3T2",
  "key15": "tUzeFKgUABuQRxHJFZSpzUfPWW7L21vzqMcW1mqSmBFvLHSf3SftzgYTzYLbUheT2cAHZuLY6R3marWRFhd7J2J",
  "key16": "2yvKUV6xgDYxVHEw5q384xyxGHQ5ovs7w4DhNSzNGFf9U7BnMmjMqKpDTKqgSKfi2LorLfmLneXo1ewzxStPXQJg",
  "key17": "5FzdwAH5PDGXK6xVQqENn9bndj7VmMU97p1RX8KU7VfYv6KqcBN2A45RpJShXyZRT9S7t8ka1MHBxVyJUuvnHm17",
  "key18": "5UFpV4GE9keJaU2gbMu6qFRBSRkyzi6HZc9hnM3wtr1s2WtuM6LnaepuneRYgoL6dumY6Ksop69Ag8qDKum4rmWD",
  "key19": "64c838DJUXmxG6DiUYVcnUHWNDa6ax3sXbjXSWe18rq54FVGEXnusE4w1wHqpZUcNP1EGrLhQbedsGrhaesoo7S3",
  "key20": "47qxATtHmjgCY48w8KBL26ZKpryVpFBT2CwPnH9PCej6j8DDgs2U9NsejQupYWTTcWmiWaJQYF9XGAR1CpQG9jx4",
  "key21": "3mmAFBxdSwDcHtjPqQeA99kpqdP7vJkCdoe4VngfzneHLvXSww9iiLCJNUwyd5GFeK4TduidtKaDJNTH8XPJZrjq",
  "key22": "3YKFPiACXTZUotL574h6aXDe5MnKBbbNGB3Q1kNiqwGeUAZ6aeWxoWKNHpkD89Av9DWEHBpJGaY6o1MgderTLRQH",
  "key23": "4ZGmnitk3VAGkonuCeyrp9s2xp4LhER5E5zRe6zcQP3Lp8Ttg8Z991JyDFBfHWJ6Lh6ZypigVnxkb8CzQZYz2uEZ",
  "key24": "52mvch6abrGhPnqjrDfAooFAnyL6jvwhrPtM1FPAYFAmMYBfa1TRjN8h27bmeT1ohcKLRiVkwbdHxmfXCF9cuNGM",
  "key25": "2CfiSq9jFVqExQ7uWQBwS6S9Ep8tYrFQHUXrDnYykk28Sq13g5gqgs2xCx8ymPTd7RwnqzqztgpcEnGuaXgt7JPr",
  "key26": "4QPnkGnBRw2AC5pgfo8RhiDG3U5NyGLL9NBtCBfVuujd6s3PDbxbSJ8jmFEM4ihQsZ3RVid2HQMsWHL6desYanPt",
  "key27": "4znr8CnMWqFJrQxLo9aGZ2Q91CNhtk8Fpx3hyN8oGBmjs3h4jed5Vy6qSPXmVYMCaQ1uJR4nru9ieRAn6HxFYPmv",
  "key28": "u24QobUYmtrKpwPeUha6aswNeofiVEEsTesWcebLYVBN6JGecsfKDb3YwdP9ZxLknfgpCnUYDbjrqMmM5sAnFbP",
  "key29": "3jEzHNM1WKUg5gLLM4T2mHJL1seK2U2sqfAmkB9kxig2M4qhu8VNQdpSWcmdG3rm62zX2Bpe4mBZzLFw4XNCEXjy",
  "key30": "2unPZR35hWe35UiH8exGZAftXoc2o8aK72bQBXbc9E9TRji4nH3393Fm7sASbVtbEpcsGMnWFWe9ArsmRsZvGn8Y",
  "key31": "3oCJu4GM35enFuwVboUJVxLvrYnq6B5M9pfnFdDyRWs2dDHaT3kGqxVyfxMhYAFAP9hnc2zmrMDeETqijJJXue1K",
  "key32": "6Z4EPuAAyZVbe55CgQTmv7CZQUAQXkZg7EjDNichxFEgU5wSZuubBgdt9ejTMhfH8D6Ap11SZ9mfUKdKXBMjDPo",
  "key33": "54YnByXTnQwdYDBU6Z24iVVCRBnvuYgWBzesKeqDPRh2ocDDmzCPbgwMiKHq9JGo11wWw5aXyi2VmfHz1bUQdgyh",
  "key34": "aydjtdVpdsHW2JU5qfKFwWEKDU5Ns7w1zdAQqjTMZmmP2Aq8AYGJBacYrXB759adS58r6ENFAULQsm5wujXL2rR"
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
