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
    "q8c5w3wV11Wud38taHPJtbprLULF5bZTUm8gNzTsirVKbCix8DRZUdLcfWRzBDYUgvZkD12i9TEPbVEbJSrSNX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PTNfujdFzWqonBFMLgaEVGwm8dAoo1e3jCNbahPtbpkn6vpYBHi2dfH1xziCHaMnp7zJFAD3zYvKewp4Dm6vFz9",
  "key1": "3y3LUsYT6L62f8TqE8Y4RiWSrNE7b2kHgTK693kuXrqSZkCUG8wkS1vF3wSF54AjKQK8jb264ntQKcHe2HofXhng",
  "key2": "43YFwFpx9rLdBbpJQSLod3LsA1VKt82JUfpxVhpF4pr9Mfq4pxq2wPMRiM6mYr3HLACvagyBohoxpiPaYACNL582",
  "key3": "3dWGSD29DJBiu61c8EinNNqcH6mXnsk3AwzFxZYSvUfuyXQXXDwEBwBtszwoeT1LdtTcjSEQBqRgKhKnW92CGWpa",
  "key4": "5ktyzbdyuxTZgiTrpKP96X3TyZfpDCe2VwHCbDKQtww6U37MHRd2JEJbjnFySTyWrzPbb5kxcuzFph6CKNTTyqQC",
  "key5": "2onL4HWdRN1mu5k3XL3uirLdHAN3HgmBYd5koqGCYyKtfcwmqmNksTVkj1RFF6xvUeKZSAS7a7pRrCgJRoXqV1rQ",
  "key6": "3pWJuPr8yotRQ5ywquvBh4KVS14JDcdevmh95yhP2VpiEQejMkARTg5ujR5b7pfviC6ZaY26F7cHSi8kZonS5KmR",
  "key7": "2wjXuKHTE7dbGUBSMdPhwDR2wXfbytggy41zVENqqyq5cCbnagcuFJVNWKW7XZ4fyqsidng6ekyw16MCjrWfjo2a",
  "key8": "2xUrcXgbPRwxhmyoM4PV1d9WaSfTEXhYtb3shR9jGnLc8W8wULVfDkH75zvoqkgWxojoP7GdZvHoEjJfWK4Xp72f",
  "key9": "3epJ6oWnxY8bJ7wZxq9mvsSudHAH6tC2qT4carQ2EYdxXWtDWMb6EenHnj3VHBosZjQQrwX8VG6mBdS3k3ZXXHP6",
  "key10": "BTcdPKCLztLem3R48V3XmPPcpr6X8Me8FDKNrd3sMUc9KSiUbTPQ1oAv7MDLYtjczrHvap3Pu9c8WZbDKVvwSFp",
  "key11": "4Dti99Ac2wcyiYivE3pjx9UQPEw94DDQBnY4pHkrX3Fh7xzv6d5bnz4QwA6h96YFCmh2A2qd4vTjahKUdgVdkQAM",
  "key12": "3km87kSguG7JuBYkB99Std5CGSW4qXe8LuSbySgten1FSWpDiiV31H58qvu6cWfJvSmtNyxxYJCCmio3VVb5omab",
  "key13": "Tfng2eZQJ4nQXLPDi874jPVxfTSNuDAqei6KHrgB9ZwridnczSpC3CfpAGJztFYceNM7beMWAV497BovcRrvvB6",
  "key14": "jhS2i9guh1U572izZRi1egr4PbxbudCBfXrgaRtThoxwQT1KJs8oCTq9s1v2ikyWYiEYBUHFZRCAWEoozXgWbsu",
  "key15": "2KTpiQTZ6yNEhmYJgGBSwXh5yz7R9wwa7kXHXcQUgjbr8fZJEQzzJaFFEwbJ18Nt6Ty4vjPBxgwmP2B3AecFj4Hd",
  "key16": "5opU6bLVvXYcp7jtV4LjKpwc9vbau9QZv1r6a7hNtiKCV7FwEwvZLUSnmc6v1ncV2Hgpr6RywbXQQMam8MqtPWGz",
  "key17": "3coDVpaSc58EZQUVb3mbtR6QGBB5vaYdD9fJVQHtHFiQ8t8aaiU1KGuZw1yyh5ZBkM6kXPorGVKDgBKay4qU229Y",
  "key18": "3etLwZSipYoH9T1XWurip95LbxoZMfpdTiDqVs9TdHQJBShr1V7ziHkQTRikhn8P27mYuRJu4JHGEjejs6igJjyZ",
  "key19": "3KFvXkWrHDANruYqVitMGbfv8Hnp7Vp6Abns94aB9SDXvuxZ8sSiACJmFVkhpyUby9T4Bk7bs6Zn6JYmucojjYin",
  "key20": "5NHxmtVHe6dTqZjD95Z1mwUuLy9g64GkJksn5UMMKCrsx2MktRfecpSia86R4H2tpT1Nb1w8oYJFPiyYFQCSTuUm",
  "key21": "XZ6eK1WGnLnQsvCFoyNpvfxbW7sqtLqs5rK7jp4gnHGqYByDzNwAWWEwMPyd6Mdo5BLPbAR56xqfpTrNTwJTUaM",
  "key22": "4TsXKN6jahX8kMWPi2UeXTY312RKGKaTHZTm4JhrDpKjHUy8Twe6dk6be2bXcwxQd8385hnPbMB6Dze22coCeZGd",
  "key23": "561y2wR17Fb5rhtw2WAG9Xijvnb8oRSbpSajhobAP4GG6aMpQhhNNa2yCmLEkpAaN4iFWoLiQVY6ojiGARRLTzHu",
  "key24": "3CwZKES4Su3io5mETwdRbJttfZwvSe7GSLeKUJA7t6AEhih3iHSkuSRCz1vFXfrpRpcfcuSN9LH3GxNBhXXFTAkx",
  "key25": "33Y74R1XxfvRaddufvE8JGWRtfhh1EEJbZuZbj8PkwHM74nxUwQirEtoFSZfbUSc74CbWtNsUGr4z8vcs9FcuNee",
  "key26": "45o3vQycM47dHQ5gxpMgB6nJi4KewfxW5p4c2YgrVf7hgQhgyrt2QejpGPnthDmjLTHpcEV3uSWunDuaL1Rh9XF1",
  "key27": "5keVGr38mM3vRf5Khgp4cSVFf8iZqgKJXjXeHkABxw3VXgG4aAgscyFDJLHhR7qffVQCPgAetuJ1J2cutx8jqzjP",
  "key28": "4N2J5QLjP9ab5saGmGvPCrWM1U7N25xdwVAGRpvuHLFd5KKRH2as7SmLtRoGbyCwWeEkPxqKNbsrPdrkS2aki5wH",
  "key29": "2639SFnSyirGAPoQFCaC6x3M2Jt2UPtzXfV4Nqpt8B1HwtUeajW4NCTpNd2eAA1kRkcNXTYJDaBHsbiHUpBo68oF",
  "key30": "3J7H67Rxes6UqmDuUqFU6WtjEZD8KWBQbdJMz5kGPnyDaLHH7SRRz9n3s5knG1u8XiBeGaVRCGMCgaL8UrQtHCw",
  "key31": "b9h5cQX7qvy86QSVyHRpqjbA4Ue2N7cnpyAJx1DCHoMYxSXUgg86KtFo8mANpWEboxTocPtPy62xybzwS9Tfnx5",
  "key32": "5Xx3LVtbhCEQvia6FunXn7gt2W4Ztgy5CdkiYq3B2EMvqZoGGJkmGdiT8uLv4mzy28ScG16GZMmUsnguUiyKjDgF",
  "key33": "124gomSFG8bAybqzMbDYBW8z9ZNWJMAYigFQ2T4jTmcji8nWWkCYsG3WxYp1H6iaTQNPisZxh7MVpejU8Z9K5W61",
  "key34": "4tECcu5UJNA2ezxbrd1pheeXLvUcGdSZjrUQ3WmJi1HcfnDUpgUnwqNhtWroYN1G6xq1bAnmcKtw6SMB27dVD4XR",
  "key35": "5J39diHgZaDowM3L9Q1sM5y3QHNxVvKT6Jr817aM5JEthgXmKsriPjWpxMKXPPYk9Bgx2fY1pEteGBgsqzxLJY7h",
  "key36": "qXzEFDYCR6FzwnaSH56XhCYyWj1MYxcL1Jy83ocYyJRYMi3ZA1utaU7Enj1sBxZu3Gt2pSH7LTu1sDvCxd6ckTN",
  "key37": "2N1siGB91GEapqbGKuEXAquiGAZtMRfFMYHhRVqUKtDByxRsqPKnwtYhkM4rDEb6SvFK87dn4TrK4LgtrZ25xzjK",
  "key38": "3TvuKdXsjakk8A6y7xbeC8WtueJYRbHgBehLsXUQdeWBKTqDyBz2r7xDN4ydc2HnZfKchmGi9S45dVPgU92LZSFk",
  "key39": "4MXZEHSJggqWP9MWyDLR9nNxNJ1ckY9pCAW2W7qBoYuXdQeAmySw98PAjb2jBa35bzK2HbocmQARGryZHskwZdG2",
  "key40": "8avMwk1DfUCxfu2FN5Ys2M8KHX2sYx6mi6Qf4QmEDfBbqrqN7q1kmTvBojBjGuWtHGQit7Ajwa83CccshojCgip",
  "key41": "V39sHHGBhTz3xepVHWEi8x1x9eahFB3qu3vZjQfqtPVawzdLwRXypJLqkrpZuKG2NHt1VUd8D4cmhEtBhXswoNJ",
  "key42": "36eBADUTKdhHYwSGsd8FkfLNf7XYJGcx7FufBARshLaK3XKojHfR7rG1Jhzf6yTqTTD1GGV3xGNADeYPhDq4KVVe",
  "key43": "qCdCsdZGHGXmw6bwNKowbmZ1vrhH4V3gonXQV542Cou1St768ro2VJs8dSuawEA3uUhnfbWacQAXYqJf2WqbngN"
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
