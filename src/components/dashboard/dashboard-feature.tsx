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
    "617c8uuWj5BmQN136EdMuYRXVwiVKWsZUJahaMjngmWqGUdEVePgUuizrCahEtCzCQqrGFRk8B3DmBacAkcy4uK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oigGYf3C7KmQNVGLeWXjT7mxRpaercVrtprG8txn9itNrRKNUUZAmmicicPa1W6wHy5EkW7ocRmPnozkGTJ7gbi",
  "key1": "66gBkZYTd4Bzpfp42nHftp2uN58HXm9E3QDjpCPds3gEdermrJAETuF4tekCd8FQLYmNaAxYN6VRwMWb47UcUp7o",
  "key2": "56FxD6XyU4UjoBDCRjDMQUqidqZsyuE6RXo2ArGG9KKSzTzVcdYjX9R1Jb8UWbrrdk8TFwyRAiDdCK33RJzAKMLo",
  "key3": "Dz9sXR2W3Qo8fEUMSVNXxvmbDHYnDKXCDxzpV8SxKuXsoKiBTjHaRy923MugenjGmkbBdtJSXdo2Wak6o2w7hrC",
  "key4": "4EqMr7Xuzhce56zhgciD8G3Dg2pNNsoNBdENekPg3Ufcuwehe5Rp7oXtYw2THmiFoUmENUQ69UiK3WNMXXy1JL7o",
  "key5": "54KciHPR6XyszdfguUQ7MxV8hdtdvjUyzrcXty2fTueKrvJXrbo43gfgzWQoLM7i7ndyQquT1EJSchtY7WbVhPNx",
  "key6": "5ec8GiuGTr5KfkasZcwTKMRE7MardZLZdRYLx4Xxf7Gm4L8s4p1rPxYkBH5uYyGWPqCY3e4KB2Wi1yBuna85QcYi",
  "key7": "3Psy99pzdFo5XCxaUWUfLCiEWamtQB2nv1dTDxVmb49rYw5haX1wmtbtTua4yk3TgzDCahaxcP714WMnAhdKbDt4",
  "key8": "2DhCkk3fJr6gCdxPJ2oHViy9pkbNsKwpEPeJMHfBN3LqC6HMbcBPQLcijxyeb3BBE1tpFQjtYPBFccevD8oBhM1L",
  "key9": "ASc8iWn4iNRMBHp4MoooFGB6ggtcYJV8BeuTaMyASzjrpWFuzoSvfhu6LqpQHAN9smjhfbNdo1Rn2EhQwWdNmaJ",
  "key10": "gBpeGWhcWNVq2wy89aYm4v72BZ63sYW3ckek3EyGu8iT4797Mm33YUdS1fXSCiArHc3E815gxcLdQ3BxuQZnZwW",
  "key11": "4dNFN12YRU4sjeanCHC1F2s1W2vBi95QjH3Z6zvyUwWpP3X7Ka5Zvnuh19VvdukZ9hTRrR5DN12o3HmWZAXQydZX",
  "key12": "2Kfh4Ny3fEhVAXi6rUmndpLRsBGdoTuCAdmyJYJEJnbdSo1oW26nb7ybgPm1nkxMPm6tx9n7EBXjt6HTsBPKj678",
  "key13": "4452ZXYSfbiB4XqGkNavjthVuZkLh1TfmRutD8MKZ2vfX4vETLdjTLcp39McVuiMTqTvzZftS2ienma4xgjxSfxa",
  "key14": "2J4Jdco1toncKZC5hKdi2gYVLMheichdsJfsrrL1A4m69xY6jdscX6Z5wyA27wwF1JTjCmnXKyKT4aK8zGzkMpRj",
  "key15": "37fgnP2fst5ygVXkKxzTJ5EVuinQL87fHXNWXdy5rVQ6m2uHpVVe6GoKdt4eLtzSF1bU8JaVc4Boi2r4NEi3qvPD",
  "key16": "2QXigecVDbjtJyNFohj19ckRc2xftAVCyuS4M7L3BgjkXKeCTcutkQvpmbnVLN9tSmLACcrtLMwGdim3FdE8Xx9W",
  "key17": "3uugrZUbrHNNh5UGx2q4GKYsnDzzNYEKugLPf1V91S5o2oMhbZaRcw3EcGrZ2813o1DRE1fmyDDqBS5MzyY8QhXH",
  "key18": "4wTjVoj2xDcrs7PjeUoNLx5qAMN87g7FCVgVEZ3YL16Sf2XJMrJ8AaE29KRmSFq9eXFeNSSTwwWpG5Mjcc6CR8CP",
  "key19": "33cNFuEHmVmYatf6o4BTkxBt8f7LpLXTJfkNJC5pn7EkwpWvUooBA8AV61LYuReafA1vthSkUxVnbaUiwtN1u44f",
  "key20": "hZo4yR6Kx3foNoHjbHKLKbUv67xhiogTayqzexDJgDJMeXPSbF1Cjp2Mo7B31uDHLMe3sS3t2QdFewRprWdDrDw",
  "key21": "3DKgUCEJ7UCWnpo5N6FqARKc8ivPsqXKftB82g3iRNKNPiUqWzfdtWmpmoURv2uE2Q4sXuax1TTuZqiZaV8X954P",
  "key22": "39xL3da17Tc3a379r9hHeMDmjDVjED29jf8pixDT5Z3djAstM42ot3vSPEDmYvsWww7s9uGva3mWX5DWYuH99VNY",
  "key23": "4t7j7n9fPv9jKtHxfLP6XVZtXvm3P3sRRkMpFLHGexobWjjujvTTZAbrYiL53R7hJkmp61vW1NvSryscCHp3ctLM",
  "key24": "3LkNctQo6eULoXoP9p3jTTCGVH2Tp9feyJ4PmHbk2UqqZKyLEfvgXeatUL5ksJfXFGzqU5J1r16xeTsEssumxrAk",
  "key25": "2aB3e49GYPM7ztBCcQDehntfet3ouv8aYMHRzrGjsfVeXHBQBGmWXfrXYQBdnhApCzSjin1vJQHudSNTE5KhBgYz",
  "key26": "5HM6Qw3HS4HPSdyN8K3CF6zUPGxMHuV455HpjMyk1FPTmLLDyypwGpafXFUvueyNJ6PmvXvbMpetJKoxKUrDfTHy",
  "key27": "kSkUuMheWWZUgxJec99x8MGqKuA3cdRd2Bqg3Ms9UvcJz2Gv5VJqJPMM8MvcMdE6iCWhMCrxeAz5ANYNGLKEj1j",
  "key28": "3e7DLMR341k3TeAjaiUBZJRJoisfysevLF7RegD2AwfHJjqyUqQWHfej3jkVePpKWpmQqLKp2Va6scxCCg43foKt",
  "key29": "445gZ54J96ptHFr9FZC9fdcZ99LbUwZaHF9tsCVgi747qSFxZeFkvapq25GwgvbTcWArxe8gRQUrDjHva8UzMSRP"
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
