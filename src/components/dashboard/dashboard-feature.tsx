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
    "4izZ2iadAJbd6a19JeMnsmmEt94NctAMTw8e6n3Z5b7Atdb6o9pggsNuXNr61arSbDVmbUvq9kKW4TWDouWNTZn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "297ES9ZXMztyxgSJMk2TaaSNSRtNXuWZ2juYkyR1G5C145eStsgdrE6aj9cYPHeW8r3PLMB3GAWqiGAKKFcr3Pei",
  "key1": "2DpB1prLPMj1P9ckCPDrnycr1kGGMhLMj1FJ8d4KQDpovMygMmB3Nvf35LFTjHxncgTkM9Y9dRTEy6Ar8GZoe3ro",
  "key2": "5dgc4FMw8YEMiMPn3zeuaRGNQZUXahiLWwWaxuGBjG2bvd2jTGb271vfN8BoGYpyQrteVdZge3AUxKmppCss2ifF",
  "key3": "2NMDzvqSUntzhGxfJwobsz7SqBSRe7bBsSmrmy1yx7sDxztwLkTycDdhHxMUeXJG9iVAXNqdhYUoo9dbvNxNDCsj",
  "key4": "4BkutvWzu99aa6NPoNgk7PFkZR9mvvPbVDK29BrtgcrhqSjdawSpwPgYGxDGMyiiZe8ne7saUerp19tg6DZ6BiKY",
  "key5": "2ooJfMxEogB3gTrE1EWXUVaHSCMuAuR68mX9DwZjNGvcrcA22RdVUp5LFuxZJRCtWSeAELNn7bqLWbUH42h1ZWps",
  "key6": "2NWbMq8vEVhTX7qMkgRWkTPHWhceQCswGvWTiHaaketLKG9CcWdvCJuZcDeiiqtnCjpuysJbV6gwrEZ6TQzDKhhD",
  "key7": "6tpEW8jC26eaVGVXaBfttvTFwr6Hg31fcvqVxeyNUfTejGBggbVxKtSVUSeuJW89NJhk1AWwVcrkaAdadx18E2Q",
  "key8": "3PBb8Pgb3HEB4HQH7L5HA4jfsEwLMN4VWHWW6KWPzXx5erK6JnJM8e9utUz6FSygZZVVwhZgXTmWPiDoz15Wj1Yf",
  "key9": "51Z5CFvh5inHiHW6ifeRQ37A4VgcQw5sWBoCHBoYZyjkNWzT8mdgjJTDiNAnxwizM3fJoyLv37zJB6W7sF5CMjAA",
  "key10": "sKTaUogWoxK2P1f2G8TrEktuMHkDb2qy9JsiUtjmbMt67u6m6Zs81Zxv3vguFTNXPeQAk671AUj8VitGpDfuP3y",
  "key11": "2sHxqtyEdjYDmdpaW7cmjrVCJqt3QCSf3ph8QttkwG7duGSiYYpWA4CBwmAxG3RT5U6kwQmzwPc2BjJgGTmstf9N",
  "key12": "tutmD5CY3Rn4HUDpuCaPu3MJnztvTFB1XyK3vwyMiRVgyEhHCUoEM9SXbKUFg3s1x8FQseJzks79UVzDjVGAUqk",
  "key13": "5nLsXdndtGoCfyYv5kzStKiAgWwiifbqtK8bVeuVWyvvpmVdyscfm8VTaqNXX7PJM2mjxXRiGvPAMs7fQz28TUnQ",
  "key14": "pfJrgys8eF4dvwjBPHp9Qjkb5TQ1io4htnAQXfYAiPh6SeaonfYh3a8MWxESkQSny7H628Sqo4R1iWGiU7pptpL",
  "key15": "38Uozrn7DacTtGEj22XpRgNfdZc61x6HXSSrrYvPaq35RBNG9WqM1YWevwrx8tSuai17BqP2S9MtaPC8DMbeE7Wf",
  "key16": "54bgNwpF5L7PFGfuqhJSB55FtrSvz1LGDxTjtqjz2TseouZXwyJt7SjDsq3ymJnYQb8m2jW9HEWdRvsd1dfMPgXD",
  "key17": "3sz9LqD3WeCNbkVWsMWBRVq5zkYJFpM1x6eecGrPhioFzt16BHByPaRL86gVMkPuFqoDwB7K6hutirtYNU9f5D3F",
  "key18": "2BEwedWhzW8icqSJEzQSAxK2T2qfmyrxXubq5H6zYhe3bTGHAHrofs8nLZcnCY8nVnFqkq4hRoyGX216cTvtXm1h",
  "key19": "EtFrcgrzmfoHPdk6YzLgJFsRcVLZk29zfKSnVJpxdov9rzax1ztu4wPbijv5VcqkFCD8sA5d6dMUkjM9684jqtc",
  "key20": "3S897RFqLPAV7qCnXgG6htLhtGE4ci6AVZXSsW3fMJEW6jfmRbuxmkhQVEKshZn9npkkQssBCjNXiMXQTYntQhnG",
  "key21": "FpFwPJN7ePmP62CCJKJzpsFCKfVmf4voySKY5BcXw4rjcFDtBYiQpyYfeEhr8SvUNcGmLxrFawvxkp9UfuGeeKW",
  "key22": "2yxtgYHiT1HDJbMgkdLJDr4LRRxHAEbmX9y4thh6fmReGYpKaihkwGdDyHvrn8BNrpRMPMT8HDBTVVFt7YovD8zs",
  "key23": "2Zzom6pwWSHKxh1PNewD9LK7JnxgXM7sNWbffYWX9yroQVPCQ31gfB56P9Sg2MUbyqQQq4hHVSGMzsi3TY7LSqi8",
  "key24": "587H4bQrEZC3DsZEhS9G4vGySFjJxUXE4zRx8BrHGGWyaAZA8P9qJH8yczCkBENMJgJkR1B7NUSiLws8eyKZeBoi",
  "key25": "73hQjAev6APaVco9Qmi5EeQkijcb71cuscJaWBExVYg6ZqAQzVGMM7XFaTfUqfdmNP5VpEGkWs5sM62MD3A1K2D",
  "key26": "3zcXvwAbyCqHEeBf3KqnA4x7ZpH9MdXV4kkYmZTa1RTAfninDoqtHhXNLYbUMfVCMXGEJA8zJ86mmhBjRme41XXZ",
  "key27": "2wYKc4y4eoSPUXHQcZwUqQJHWDQXhFGtYSioM7wwANp8wUroEtd6Lt8VWYPcimNAQyyho2HGEseDxr974yHYmaVy"
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
