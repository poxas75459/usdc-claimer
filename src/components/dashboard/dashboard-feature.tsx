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
    "4Xrz5PsNNG6Gzv7ivkRKvXZejyJ3pbf8C1hWnkpkGsJLrYWqD9oV1gCQsfSkGU2GA9XoVbrR29Ch2i2GMF6V1dVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4biwus7G6HhnMPGwh5cF4qsjUJQ2dWF5fgiMuY5MpWyVceNetYBWNTardPiXXQxACqrtkB9af1iRoYAvSuJWWMHZ",
  "key1": "5eaMfgiR9ZFepUXD8ojHhMTqJSkXtdPXB9hckMNpLMen1s3SbWRUP2SEGCNxPbs7zEtSHnArBQPb57s3syimTyuW",
  "key2": "3pW7GG51P5PZXzWMxonLWtDqHyzdtXaDaeaSUJZP3CZWGq1ebVHoNeSHg95GW73FuxhxARQehJFyiFBAFxuWxiRy",
  "key3": "5BYmSgvMmQQ4p7TsN9JVdujfkMcFodjCiNj37Vjt2qLWQFmnRWrtYLpUz1uWgk194eYe42Df4g3BqmdAhySFa7F",
  "key4": "27EE53KvpHzX9RmBjUbc5yXv58uozRca7p8FUkikaNit629dxHJVLQkcBThPmEkwEyH5BVxRkWPVYYxHVGbWhuYB",
  "key5": "DMg12QVP9uVz6KECDNppkCz65akmSZmDq2GY2xEKioct2ogfD5XFQYMVxG3z9vcjQj71eLfhSH9sFe4MuvCSoFe",
  "key6": "Myh6uz7KUrYuqqLcHhaTtZ5pwLr4bvvhWmsqRXVcAh1DLrkvoVLuZmTRFmuuM3sna2t7WbkPi37xpmzxCtk9VcK",
  "key7": "RnefNCv2NUFYzi4MvLpjjLDL12zyAZfZSfCXUz2haSU8m8NQR4pKa1StGp1F2QVb5CM7aYXavTM3zeDNJKv9eSk",
  "key8": "MZzL4HXjv2ZNE18wPH3CSjh5kEx3CgFf6WPf7eoWExEe6hcj5mRrQkQYGL7a3PvhDv65TEbFvPeP6rZu72Bw7tg",
  "key9": "wmDcxmJDthuoiEKBuoEkupXy1snHLX1UFZ7JtXhhxhSLNgoo7c8V1uRcd4egng2UjRqaLrED8QANpfxiy1Qf6jc",
  "key10": "3v5RbdhHJVYGwahVzYWZjYpHcdDreYuW4xSExjxyabmrPjR5oZvAJdwbZMa3QvdWECtN8S6aD3YbiFSa1XiNirQB",
  "key11": "3jf8cCUNHNoLVpic16QgLNsBFmmm7Hw3KnQxDFNR9kzLEBR2izxRgeqFAZz8Yx2v1akp4gDVdDmPwEsx1iMJj5JN",
  "key12": "5jziGbbwjj4wrwwtcmyQ7DNTkBucdE92wHD2QXaM6BFJMTXqfzCBipSj97Rk41WMXLPDXAJVpn2sTANDmrXtbPau",
  "key13": "5c74s2DoUtdUVaKQore74AvNXrTDuAJVmvDRoDAjFSAhjQV7PpAjhRWvweno5qFRqXPiUfcX3hAdn3bcPkvRjKbN",
  "key14": "4YFp9LyUPVEMqcj41fJJrsw5QiNxGfZqkLoEXoyeMzQYcJ3BhDsNUguygEQ1fR5EiEMPh9w5Py7P6c2QWQ9PEQop",
  "key15": "2SCtcxbRkinWichBNR5n8qd1p5Dpm9jthCfzhQCo5jVFegaDXYZD38Efah9Wda9tKHttacJPJ3dANQfw7p71kwLG",
  "key16": "4WsJfaFFEPZNJaWLrsibhP2cM45HinoaHP41r61VzqbXDap7NhinuQtFtR28EfS72RyDdQ79abJ4NCg3PmiFWc75",
  "key17": "4sk75Fm31GAuhodiquzUaPCRPV7dygEGnUpddqjHArfEzdP79oBSQmUR25KsmmXXnPrMkaEx4ZMH1FUjkFEYspaA",
  "key18": "2fcb8S6JKmU2wJQ5ThVXHCRjyaqB2BQpSSi4asLBzAspQx4XSEik399zZMUfYyfpjpxpaXNVs3GNXbYYB2QdhmUc",
  "key19": "5C5N8dbdDZZgjY1kQBWF5n2jq5WD1gwTW7cf6cb2QLYAS7bVQURB58sUC2aAh2ockN9cpmcuGKqsfMHexT3E96yw",
  "key20": "2xvPbMG4zhPbbUW8atTvF4KMdF7V4RMLLZSe47EHLhVCJjN7u3ZKRVY5VMrWGcqaQBw6UWHH1AEF5tR1YYscHj8N",
  "key21": "Gu51G3hEbCzL3NNnoJdzBrcSfMLnRTHux67zqVqoXyQ4b87dJjFW1PnQVGFodKkXQgcFa5Wm1QCwsMTVdEkuY4a",
  "key22": "3xhFvsaV1qK6FU4DaaEXJRgYh4yFXvtDKhaefBKEgBYbv8dq9ncNZhEobrScmcVpsKm7st6dLX1ki3Zr3cyczmDU",
  "key23": "2vtFD4Auqrgt4qKRxnMY2yhKwQJiDLndabC4BgrSoFcb7qyGis3sAQRvQiTS84ob4i8motqFg2LX3iYM5Nd9hn1",
  "key24": "2571CGcCmGzmBEce3CPtnFUPBWtUGtrQ3Ni5a3Doe4BPpfYoT1J2uTAH793qzAEEwag3jkCbRvrDKRewZCu6isPB",
  "key25": "5oiobFodbnAUCWbjRTzm4KraxZYbSMDGFHCiGjF3Wj8jGeRnMqqkEcWGofczh7GP29NSqwhCHpumAFSq5bVJe7x3",
  "key26": "4GYCmNHC8VoKkgJabYAv6jXpXsubWiWEZatePJUzS7Yuj2HZp6fxt8SQJPiBATAyjZfwxswkZvLyFniDdJW7RC6a",
  "key27": "2GPSpXZ3FkoV9JAEg6PKsE8Vx7woeRjiT5kUsQMxDT263tPfo9B6Vn1ffoRantwfG3CnovYYbxuqwL9oUD2WAoes",
  "key28": "2eJJHxHcnzY3yywHf4jrDGy97PHiXkr5ASeKFwq5SkSc9wgwTAu2tD5g5hZnDpai3RqpYEBkpEh1shHHrBufBpVm",
  "key29": "2PSBY9QesFpmGCJ6K7pLTh7t15nJmgT8iUxh63bVr2X3ACGovChaViMhf2vWxm4q5nyFE99ps3ebbaQr68BCbcBg",
  "key30": "4UsDLb5EDFfgaUCaDVM9aaUEQ9WQhanyrttXCPm737nDTanwNjU6PYwMSpX5oStsxiitjddr9L6VGkVHp5Avms8t",
  "key31": "2pj81mbZXv5DRVdEegR1fyMenPFHxSeLxGmMngK4yoLTRE3Aq3Nsxsifn4UGU2BDrqxGjms3qLZwp3C4hSqQTy3h",
  "key32": "3yzv2VN129dA2kRjN27mBEU12nfDDU2mwyNm3Hx9hAtkkncn2vz1CsDrWxv5ScYjBSFk5u7PxaSet9ihCbrMMoLe"
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
