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
    "2rsJvGSTWCfFGhnKtek6f9d7wRqjd26xcnR7MfpSPwmFaRu2tZ3MgSMweV2bYmZ9DeRa1xCXZK5DhoQuZdzZSQk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cWY1jyrSvCuFwTaQmR2Xg1Ek3PfNsWzfTJzjUwURu7sbyqRisqR9NzZxQRhz2G3iofQjcwWe2ZWywFv7ab1Qxs6",
  "key1": "4fZoEmzKsV6GX24w8YukA2V1zXpCoj9mdfkLMwmdA9yJEXVZCEyKFhFXUqWYD2vLW3LkhRRJvhRsacRvSXFoq7dv",
  "key2": "wa4D2Pbnjp2f23CTbDR3Rj6YVzoFyMmeTSV4n9mxb4ZqTNwxSGTFAVRg7iXuhN83MzwFTnx8reDC8hi8G8cfsCM",
  "key3": "4VYM5BywyAP1vswehDFV4gcFhM3fEwrh69HxHz1q9tam8WHjxvAt9QVQu8sXcoS8G5MXSyGb26gDWMoS6BQgWigw",
  "key4": "3xpd7E2HTt4ij3S98MeMM2FHjh2tzYCMBsysDfh34nx9N2g6S8r6waMFcR1CgoTGghhGdCnm5GpfAoNPLy6WXMft",
  "key5": "46CsQgmb6UhRQdvXUgV67vtQaK4CADLTeqjSZzu8ZZQ4vjDCSrkLgW9PxVXXum375RpmwxYKvvi8TJSZBDqJN4RV",
  "key6": "44ujLaWHDhp8RAxfu1Bem2Csk7mKMWu756UTQB2cr98KS1Twb58zxWywQmzGPdUwzY6K7RiLTEZSppzKa29wmQzv",
  "key7": "22KB5EQwnr5xsDqJtPL9LLmTkfD9pc1idPckzQx8drGa3eUxPxJqmcsCVtguLjQ8LRoAgYLwVKZA2iyamwaJ2Xxm",
  "key8": "54D1Xm87qr6kuGrac9YgAGPbGXG836JZ5G5j6aizmksBiTyhTWWKTDgZ2Q3CDcDgmajYqm1zkk1Q3m7LpoCTDaXJ",
  "key9": "3szZoNpqMR4fmaXQhj2VTrxsfL9xg3sF4x2h3Nf52mxdrTEYTXtFWiXXhgAXpnfMZMrQ25dyWjYcDNxzeSeDxRQq",
  "key10": "2JCDwe2S432BqUiePLLWZR41cU9CrGmvJxcYGtoYw2fpkCiRx37gnKUgVWC692i2m1Br23tXRtfGYPaBqJYSSH6a",
  "key11": "56w9bU7Sn2sFGKbWdf4tgTXKaxwuB8XTJeXD23Zk1GnmZREpf9snvHjmtgmas1ktHJVfyhLtJz2EqPbZf4tSi6je",
  "key12": "5QVA3s4LJCYrVnAh6BJKWFqHDa9L8MWft5cK9GS5kXNjPmaEaG6NCaPtSLsPN35DYrJaM9f1pCKiMpVdj85XsHT2",
  "key13": "5hNF1oZ4hZQJ4Z5hzCTh16yKw6tECANFs4JT46WHBAWSfYS3Ab6eEZcFt6z8dA9XsR8rmhqmjRYCmrPqbzXDBuXe",
  "key14": "BehEtUHAiqErPowQwzYJFcPJ3R6saVRCucFeHQASDEPaXjV57RtBUDvJP6HLZQ29hcgDXpPzbwEqQciWACYw7Sc",
  "key15": "TXABNcXc2wMf5RVqf6YUCvgtDwUKhXfgTQ8x5UU3gKv4ZJFq8Cvt1tS4jLh7M6LNtJD5oPAPbyB32X8LnWMbjoF",
  "key16": "4xQAJeAG7DnqbX51j1xRrMmecvQ3QYykCGNiVPgvZf6nRxTpmfAmmd5fRuDvcSCdFBXXGJkwAdAxtzThZz3fSnEd",
  "key17": "4qAC9nH8o88th567thh2wTegZPHKBd55GHgrygsgFmwHQF4f18B6GwhHF71meHGVFZtnPMrmdTTKPvw2CMaYQpr5",
  "key18": "5PjoqBdw4bkqHtonBcyMoy3me8vyTfuvgjjtrVnwoqYChMwWvh2kX9PUPq6GNEdBPwvo7H9ZzqoLT7ZE1R5EhGfc",
  "key19": "5UJp96HtJyqSwq2CB6WTdPyHituNnJP9NDqpSsFyJVAnmi4wL98iMdYz7FFDAJSbtZP6YWNX1UBAMYCYzwAr4GmX",
  "key20": "3KkbteCiUgSm5DvoKVxMPZbCAiBiaK64orJemaRTAqbGqTg3cfR2xKqCKLArCsEP2s7VNFbSYXejwQPnnjYRZ2Jt",
  "key21": "2ydwjfA2HwzdKYYxrrCvaLfut1vSKXBgFdyqF9N1gxmEjnWFoDDWoHnbZLCzVJWBhQzCD7ZmnaBqpqWeFyx3qJuh",
  "key22": "2jwvbxNtVubeU8gWXjAJmJunNooWBdUynqxfDXuif2Meud8vTREvVuZBoxy8L4rsK7zDj3Vw1ErR1B4p1mY5HMqL",
  "key23": "4jGfe3vhLFN9y7nEF688uYjJ9ikjernDbwFDw7mbcgoA2LdEg4abUwkDmUZHKFixpFK9kuLgtL1mfPELHkZGcTsi",
  "key24": "4idq94nnudW3u2vetCBNev2T47yd33dzzQkiSrvxGqTFq1DZ9AN2LPAqUxHeW1G26p1CoB8bNqAxwiMz2pA4UBq9",
  "key25": "3G9d92zjd6BgJgF2Roe6qSZPQGCtTS9bZDxm1c99xgZKHHw6WGejRRmpidivdZrLSC7PLVUXLZsaFF3AUfLVq4G4",
  "key26": "2bHw83jSg4XFn3zbhyZvyKiY9kG1hR5ENbr2AvmATkC7HnGYaXqaD2Af9eZhQgbqJECgUL1qH5ciq238u4TH4i3e",
  "key27": "dc22zMRisbjSMjSXdus8NkLJBgDrCBX3jkXRPCzrnfoMdcrZT3Hk1vWKagmdefpVJ1E8rencuj6ZXLKEy9fEdb1",
  "key28": "2j2WP7dFnH1fnoCe68nyCN6KaFGmQnDtLhEXmEJfkqWYjkWkTmKNt6ktjtY7NUXsJN2HmBW2CqYTiYDqUTe6gWm",
  "key29": "5ie4PPDtPXUZJriLwknJtUctxwY8p81DnntoPS7iRjXrgn465QfZ3MBzzASrCj4MrrF9fStPqvFcSzUjRvSeJs6Y"
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
