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
    "3gqjqkwBHaF9xx5jjJKuEGDk6B7Gtt1J2XjmjoETyFRkd7UUapuXAXPoKiSUMm2FsvvaNH2edk4464mobJkwBSVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BbbvnX27fGexNK3EVxb5HE1AaLAKKqiqWj8B18keAZGHQnJZGBqeEU3sh25VseKPc1qVTPkLtbTWX8xEy2cq5W5",
  "key1": "49Dn3GqAZ86SEZah4DH4pNj6WgcSXLrmUNiq2HKs3z8JEoigHxoDr3USRtAT7bQdocGoquNHQJwya47QUVF1C5mH",
  "key2": "EGhnYnnAwVYkA1Jca4Yi3xLyhgg5kGphhHX3CUc6bDcTM2HdSZP9pDjSGTKXy6ja2gHLGKKVxoiPnUEkY6aPzdm",
  "key3": "22a4yBY8N5BgfM82iN5H2ibJk49tWqsDUx22xEhAdntdY7RS9xZJSyA12MUei1UcAhEqbRsg88qaxrZj6xmFZo8Z",
  "key4": "zucSEbcdHx9iH2asQYR4hhNMPZn7X8fAyLvPCnBUibErjdufWwPvdjsEhgYMCBKWYiCz4EBYUHpD8UwsiPPNHoP",
  "key5": "3yoJmRumQJXuGZWEX1sZ7F93vcomgLDiUBcKLjojRUzf1Cte2Lxi1bZPRHCs7nXdKG3B3s6NqvBGCahePkeb4bt8",
  "key6": "4VyF7h4pxSpagyEP79jg42EyMGGgGQo8RR3sBcLhLZRY2iLF31iZv5uoSCVbZR6ntVVkPXC5i5iW9R9MwY2vXn9z",
  "key7": "3xAchBriLuJ4uKMx1TLjfQQGQMVpPHYuxopUvgYE55GSmaK77ZwzySkVeTeo2q227WPAZM5w7J6N2vXnD9joSefB",
  "key8": "5HkXBp5ChJQQm5EE15BH6aRVMt5P3PG6pyjyTDFP1bhaskLij6fpetyBajFfC5PNfVrtTSB6kn3kGXLkMede5eR7",
  "key9": "2FpPAwdqbMVprNFKLpaUvMKwiiH1W2VkbZLmpYyuNo7S2nJZXwDGjdfFzVwLxLKXDxMHY6LaaejDQfYWpKAk2vrA",
  "key10": "5UUE3JLRn55EjHBB5CzpqgCPbWAbkrU54ebJmysQTvpEW7MXB1aT5TLAFhxWRNdZaS3Y7DG4XF1gtic2oeCL35of",
  "key11": "5n82LjTq8yufoKY6BtA4heWczPoU1psZpJxsuHseWrdrbXFoRvFNrBbHJRKa1X2z26Vtwe99iBe23tgt2pNMHyBf",
  "key12": "3LgSfTpUVg6CUdGZ1vgdGgYMu4NPpqxLHgvi9qhxpukh5NiAdF5VT2KG9PVQNU5PrMoBqtvA3nHNPam4D4Kvpqka",
  "key13": "2XfPvBHXLJQo3HRjeGMYoUHSSxYM3CZBFkvQ21oCB3Jdt2v3XwvindoAkmEMvpK2chiwbqJqFWrW4xuDHKJ4bhp1",
  "key14": "5KhMLbZuPwTLuBUgFx1nrsCofB7V4TXbaBgQAHNEWdJAZLBviZpWXDsULpGr2nQ6YFpYSw1XNVxAZTrDoZwsvcgH",
  "key15": "2sQx3pbcwvoP9NKonTBs8Ze3dtRSUqLUQa4VtpxTNe6W52u7ZLvkGX6fHqtgVnqoe8sd37z1bD83JyZTA9KjrEnJ",
  "key16": "2wXWzHfmaTGwr8TnDzde7hCSTkbr7cKzdZYygX7hvBUfkMsdK1QH2jeWo5Ch5A9sMRdFzX8b1FbLUbU7BGi1Ly3p",
  "key17": "2GdUMCDpmrY1RWmhjqK78i6SA3B12B4JW936YB77AFkrNUzpRu6oGyVj3QQp86qGNbi2hZYCjnU3Li34BbtyLHB7",
  "key18": "46ahGisvvDas2UDkPeAT4Lh6XSdF7HGtECs1WzfSerRokb9suJupXzZvPmUnEbeo66gKGTPeNwsbsrUe5AJYh2dB",
  "key19": "58YuGCmAsn7bGhNCswoFaBpFWnSjvD55GrCLYETATL1qL9bPT5LWKFvL5EGAAGS3CWcbLYaxLg4pQ4qBa681emLX",
  "key20": "525kXvcHiTiRhVNc8dcMd3RvNxwNijnFdKodU2ZMwJkeoVV5mAFJvBHAb7Frwqd3LDeA5gsnhCz3aCfuc2ALSpjH",
  "key21": "56CDhBXpB9GZ3iWRsS86muaasEiF6tX1d6NbLYvtHhUHdYV6ubtqvggamZjFdYbkqnYikZeH6TxwpfyPzkHe1Kot",
  "key22": "2Q8m9c8y1ErgMCMi7ZWm59nGxiaHpD6kX6VJGLMB68vNhccHnWMUDhUNRHvreWmDQ1aMpLb9JTKgm9yPhLXDxfdw",
  "key23": "jU7xz1KESbByX1gwUvxE35aRTXKvVn2sz66XPBhhKieQKfyxzrGhx1NoLUd65egK8WdsY3L5kw9Qdm6EXFVBjkU",
  "key24": "2FPLumAvQfaxCvoKzbHwtfXBzAMgmAhCVtok85Jur2mJbYajhteHUtmuMEqwGfPubit2b9SephGasJKqBMsCSyop",
  "key25": "3ybEkhZue1MCVUogVd1xVSwkp1mBH7L9648vTEv2sa1aNpEWtwe55tZ6m6Cik5eNswVP8WwLVjFAjGJaG4rii7v7",
  "key26": "4ZK2VfDgkcBoSCHDKZNtSEY4vBdGro9LgBvdXTteSC2wURqbpti1N3NANgXxQGPfWBknGK7tXnoRukr8mtLzZDgv",
  "key27": "2mAVterw1Zp8HCBj7UTYMBBymuWbssTuKxoDrpJF1VYQv3wM5HgzBkhqthzahM6NAjim3w2Pbnipsz4z5CgmDFWM",
  "key28": "4yL2HrtHEWJdidL3LqSYwk4gKQDqWCNCQ3cdoaSBEeJVFjrbGapTfNuHzv7kodsHpLC3pAgg3YC9UznCQFcLNrY4",
  "key29": "3U26XgWJTVwtpsuVkJ9oGtSsVxxGx9jW6ypgcwRCJP9T5b6CxjzAUPPePELh9vBF22u3wVD5CbTB9ejzrtKezJ8L",
  "key30": "uWm6E2dpL4Mf2VwunSDccAM7qyFHjVKe45ygmCn5dR2ohsaBEy3K4HTFRzMJFbnTj8DrDk7K941dQh6TcajJ3bn"
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
