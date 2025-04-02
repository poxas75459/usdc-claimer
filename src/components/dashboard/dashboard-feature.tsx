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
    "4YHzfUn8uUZxN8CDdK7LGBGyXUdEbKuEs59mq1sEzZyqjvNQVPYWeLV7mwZjErD4uSuqodxd1s21V6b5x3YD1Wsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJBNyiAas8TYJ53dk2Up3TLHKTgk4dTaUFqN4whXvwEPH1MXPxVexvfCSAVQgaPKpjd1rYG9uCD8ro33W6ioa3S",
  "key1": "2rkHsK8ixiG2ZKV1qtujzdcut7g33NvSVeW4pSFDv6rv3znGMGF51ktKuXMGYh8Bg78cmxnsRnQYQ5nAzxZJXipH",
  "key2": "66pYzmUiTJGZkxjpAJidLQC7G6iC7VPUcek2nuqE9dJUntEowBwsKY35hNQR3QbxyH4xYkBAm3bMnoVD6yNwcV4t",
  "key3": "3Us3iemSNtyu2AWpGdKAW1HMMyQi5QvrkcHrUtq4eqzf5WB1LKPyLW4tomt8qepZr5MXajYqJVWXuYMJyNJq1z5U",
  "key4": "3KRcr8gtTcVt2tsL3o7duN3MrK54tscNzXkQanJSURNsCMWQEcncWXbp5L1FqSnLGodnENtpTmF7i3LdFZdxFJfJ",
  "key5": "2ANLXCz4HYuJthCFL6f1TRBYkUnERu5hbzTjo3FZXSS6ZexuFZxE6EiZ9mMKMjBpCoA68MptfsPnHs6532e2Avpy",
  "key6": "3Cw2ZZZzEW1cf7H3db1pnw8SZ3UDq2j4K812moi67ioAhQEmecadoeVuwrEePUGViym98Hd4FjggcbLMwGDjCZDc",
  "key7": "2SdmeY86uAvDxb3vrcNp9GbiLtbs7HNfFWMUkQk4UTLUrrb4ZoSbAf8eCwTiTebQ4TPqhhs7xRTQzE8EsLUjgpeb",
  "key8": "3vhn8xv8Wejh7bfxuGuFX79HdgJEh7EcWhzdFbBZGXA8desCD3KTh49itjPYCKCQzN482G4dBn1d6SB482LZndsr",
  "key9": "93xXb9x9hyn7dZwLE3G9SjoKpdvxZfCTDMVKhqueTxGk7M9NFi1RScyZahAGxzMSvfAfwamjyVY3LbntdfogJNj",
  "key10": "5Uyt4E82NrahzmtbpMZoH6Eo95RSGtMckJdY5KkY44m8Mu3Z6zPxqkcXcUAKdkmmjQpcwwBhEC596Jr4t1aMGK7r",
  "key11": "4GoJJH8YsnfLpj4xLcTS21FCsN8ma3zghwx2EB5Fwy5T6bnc13ofY3XUzpD1P4V1uxmTi86utAWV7K1i2JvWE8QX",
  "key12": "Rnn59VGxzoFajFXKfLs5vAYn7DiGyQRm42AdrxaT9Ri9xZ2JKeCa1GDtu6HqhmBjB4H7MKCpDVeoJdZGohTYfBv",
  "key13": "55pCyqFxsCBygkwe3ZSpv9nAW7mAWuM8isduF8DN2PbhN1uT3yXEydkGtvCKQYXiosrCf1b13HCDfnh8vkgKgaev",
  "key14": "2R8pHpehipH4FqHSRXXnqgATc5WtutrzbGpoMtqbPP8XbdCVEZiCT7o2vEiCP2rZGYzKaSPmto8GB6fDxXuLsawJ",
  "key15": "teBVChcwC1K3JGqTccUvyvctzCWDizKbymv77H6cEYGWauWCmeDtBeupKxpkZy3yt2NzqH7QT5wbVv3K2WvYHDu",
  "key16": "4vRajmz1pyAhNFom9yrHhJjsSX6YLNtc2ALjvggT39r7EwoZiYi9afnp5LjirAQC7pjhS2ipUvigQ6xybHArn8Js",
  "key17": "4a7tLLXY62KBunttp86x8mf8gPzVSQUeXwK6XePdpCnzqNTdf58723922cLZ9xVRi4mZFXrNxxRhdi71N5ddLy9i",
  "key18": "53je4MkKpaRpTkpnRdKwuem1WS1nFKyvkefxtanAXE4kY6LuMvonDwnXYFwVGAas9GeTXCyQFKuYZS92hwiwknuK",
  "key19": "4myZ5S4MQsRxsF3yxiFnwExGvBsTM4Zoghc91KKruqnvL1CCY4bFDDAovexe3puMMGRvkEjnSbeppapPGwu8CVCt",
  "key20": "3KTMWSCLrKEetpuAy4F19XBEAjnfCmMFQ1BTa6GXj5J8RLBvYZme7J9CjzPE3eFGT63JZjnNS2QLm1gYTj3afLda",
  "key21": "4LcyWBAk9MkGQLU61MA7Z82xQZknZ3J5HTqrouFdP7UnYbpwxuyfLyEJBKqoH8FDNWw5f1sZjBaJKz1nhy2oqXdm",
  "key22": "38Q59oU6V3tPKb4QhNTHk3fsA5hrp1JXUvVHJ7oYU3TKTgvuUWnUr4BLp5s9wwK9EFTfsJ2Z8mQCwVeghygDjSGK",
  "key23": "yHGKqi6YgZ3ma3dbwSxjMeqgsfd3kAihN8cgAvBvKfMjnJMLK9YHTCv2RHWr49JtzG4wFtFQ6mV58Yiss9uXgCF",
  "key24": "4qwdD5MZ1hyMZkGpsfn8U3xgf81SkvYotfyzMQWGgoq76qdeafUTfCbko9whHADmbgrsvLP2YkehHPBtRLomMXj9",
  "key25": "5SZzMT6DYvSbQ6PBDNEAcatzZgnUy2VBTFNQK4ERNEF6vK85iQcjsmtPwQjVPwptByyAaVpb5AxqXw5oeDL1F4HD",
  "key26": "5dy38iXU7GW5rn6Un73kpHwQukfUSNV3U6eWVrRvHR86e7EA37DAE7hVG58TpZcB9TcT2zoJRiSGww6AxNVbWeUj",
  "key27": "4hDxuYuEjvPeBdEs764BF6kDhsqrLUUsaeqFsQ5cyXfoxzBDarHmzhF47jjqNc1XjaLJcYkvvaBJquJURFH4WJvm",
  "key28": "4m18tX1wa13VcV5t7ubsEzMdqyQoJQos6cpYF5n15RQcfP4byG9j5WAQq82AXpg6B9DL11GCn5SkmauCzf26Ukr1",
  "key29": "4zVRDgUTPtP1B8VeYs3nXtuEa8TBD9orBKCQnZtKZii1qthiMa77icEjmPYmzUhNGt9rp5ht3E5Emee2ymQeSzVD",
  "key30": "YCZZsWmf3Vx1A9XjGDFDcfMA8B3VX9JVX778UrZJdecwXDSHrXV5x6VeDwFKXAtRn9QFoyRera9U5PsXu3J6Nqb",
  "key31": "2bvq7zNiqedV32ZHRpRnkZPoQxpcN78THVAVkoo75s1GtvvNoa6t1DUUa3QKUPF3ywvZ72WKHEHAbUNqXXDsrPZP",
  "key32": "m3zvNYqF3fThVvDa3YGcoK6upjMeT4eqMUusos5eiEBEf8dNreB5CBNEXb9J1jZ1UKjo1pqXMeE8rUaXQVJcUmd",
  "key33": "J5wt54MdHCYoFr6Uj7XveT5V2rTzzY3N7bLbX2QCpWMTqLMLXmkAAGDZ3WQucfEB4YsgDyHk3aGCgY41kth9xL4",
  "key34": "4AU5bkWEuPttedEaVb6RYJVE4EVtoQ5VBg6DPu16v9qQ4PDrzdoKPnRfa54kiiypVd53hTXtZdkNdUDTpgKu1Lbk",
  "key35": "4NCqSR7vFx76Ja95yKPagqdJivJJvVfWbdogLaXeaC5ZpAsq1b4X3FJbHVLRvKXPVQGApCBETEc3hTWCUEMucVuq",
  "key36": "4C5kqzBFsG7i3fggjEYSa3zy3MPzctb8Xo7WhMYJDHBMjqqv113HdVb1FaJuCGAFT6ZTfFUy2BF9cDJFdW6GuHvS",
  "key37": "9LuFYrNL5pGow9WgLQYAe5QY4wtmb3MjzCXTVgqESzh6t3JSNS2D21wY9Q8VdrS5xrb9rRME55iR227MKSZeZh6",
  "key38": "54PNxabHwMnEGonnkCsxNyJz5F863cwWwc6ewRQXqj72wtq2RnEv5k7bK1qQAxxp1Lfunsf1DRTtHPTBJAxNMvyg",
  "key39": "2nSDUux9S2iW26kne7quCSWS3RvzpH54iG4VRYVfVrUfyoHFs9Z5TnZQSg8qsHUxAx25WSe2ojLKsqTFvyxkNof5"
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
