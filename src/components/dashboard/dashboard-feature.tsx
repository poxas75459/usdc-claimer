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
    "2EpAvUw3x1urbLj9B5V8Poq2Zif2RsSQaKXnEtawE2NG4DTvmfKWw6D4Chf8ApfkEUkM6wv1HayS6gF1p9F6YR1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mqBU2MTZR9nLe8tnynLHCDBRipx77xc9Zp3uBoCVQAaiVqt4h4iXKxUXEi1t7sJ4ATho5SM56mfLx6uqs5mcu8s",
  "key1": "23Mcs5tKrJkybcaQiZuLRK61zpp5RNt9GG2fJMtLSu3X6UhLHeMiygg2oqJyBafVx9dU5FujsK9rjLQYUE8b7P9L",
  "key2": "3AFkgphGVLWGEBtQW91ULagEqxSic1httDHKjF25xaiBYbPbQge8gfLcNQa5sXv36ZdkKSECZM6EJhLef5HQiq84",
  "key3": "J44hpye1jBXAFMrdBCTRyFwtPhX2Ckh8mBj8GSN6vngWNrEzYJupXAmczfW1YxUa7syaJV4dB6ocX9WkApHHq8j",
  "key4": "QWmUGikYMD9tfkz52ajqDtn6ohFdgUw6uXZJ1NMYm3FBzoscYcWD6QNL2Ei4PxqmhV4nSwB2nRF8Sehqf5SmVbH",
  "key5": "4yDwBZ9eKSZoXXz1qdRFvDo1SCLG3ipdTyfnJdU1PbZ3yFs1zpCLUHq6GnWxQ7v57Xet77wZejegUocGp1sumTDZ",
  "key6": "5dszzu3uyNHPtTGu7UYKQdu3VrjAsEqAJJv1QFsx3XeGmMtyMhUSVn9PucmoRYYbCNXfM73eoDogyzLjkhw55oA7",
  "key7": "3Xsiurtq8p2iJKEPErU2d51js1vg3VKJs4igXKQZY1L4qm6MDB85URkd1sDaZfusaoXbCWU4yPEMvYFd8S71kvWg",
  "key8": "42jS81Rp54iTwGsyAutvKVJsLnyLepxMvZY5dHH3t76TRz4bSh4Yrc1qP7s11QDLqqeBnqpYdjs85sqENRuWaXaT",
  "key9": "5gVCCRDromtR5N2nr6MHRsmoQBaySR8QLaCkRQaVFc7HSpZRNCnjQyxR8oe1T3dF8kmF1Qx5ema7QDkc56eGqtnp",
  "key10": "52XKRyyBuStE4d9fHgwQeVLp7a2HpF6AthTMzi18tTXpZHp2MxqTkDsnsPEiYBNwvCr5PnRJywtxd7JT6WqABcum",
  "key11": "4Dy49HV2mFizztuCB3qEKw4kGpaKaPcvq6ABGgkra4SaFraSKZPh3ZwkjjTJhnubNEu9sHPYvhDqemHMVDyEyjF2",
  "key12": "2uEHGmi7Rf6Xeq3HVYcxWGSjmb3FwiTS26JuLifZ22mZBAzJSsZRUrpk5uetCtyDyaTTXe1cLiALjP9RPdb29RLi",
  "key13": "4AV5MDyDAdTrmAmZQ6NNZMGPvvwrKzhN3XhEyFe3YF6zrQbn6hfetpx75k7mmaUibyDL2SvsyceqH5yxCzThTEri",
  "key14": "58HLe2JQz62thosvJtv8DQZHkg4gnKJgKniLTH5Sii5nJyzbEHbcmzb35eKVzLgNoXE8Jr8XUE9Fk4MTsNMwdUxy",
  "key15": "3QRwF1HWRawgpH1RVrWS6LAQjPEGjQWhMAKSdqnQNagvBSTvbK8emLcXwZzSbq5iqwsPD9BA5KGBPQw5Qk2rXx16",
  "key16": "4xAD2BmWMnDYWSwJQMahroJrdBXkK1wyWzVSTrYEvQ8m8DSoBpadZ99MAPSbXqupUbLN4CiCJTtWXY4ni5JYreBk",
  "key17": "2kkXrAPWEGnECzvETMMbdNGHJLFzX1T83qLdQ7Ltij5oTqxWRUZUdk2qEzYUVGM5Y6JpLCjocUkWZP8kuisV3RmB",
  "key18": "4L5t6TW24ne1RwE4Ju23Xcv3z3DRnTcBHBXuF423Bo9XCQbAHGjUqxCjDwKJcJ3L6GNiPCgh6PEsG78DgJYCEij1",
  "key19": "4cTfcZjHzZqX2CMc87C81MXqQJgVUgi8WTDcw9HFWWqjcca2EBXdj2oGtp951DgdWhrdGDuGYKW7e5GpbCdBrnFz",
  "key20": "3XxfiRh9v3DSKZ3LcSZazZ8G1PAVJMceZSjPyf9xT3CTfdJUZXRvhy7SbFVWpkqDJP32KhYQFD6QpWLPnLCr4DVS",
  "key21": "25BxosZMNunBTkbwfSHea5SRXdiMjrP93VQW8TXDA5CzvXsVMz8j3VG3zcbYR9EGqmA8a7zqVz45dsJc9Eo3khAk",
  "key22": "2RAiVw5f7Yo8n4uiDExEkdV8e53e6fkBm83Ctq1nodqqYJ1qxic4MELoT3Vo9BV7ryHqwNDzrBiVm92TBrrn6SdT",
  "key23": "4STKUsnxFDmc4Zy57i9Miwps97rpZ1vK1xZKJLbURe2aPaeCxhndUnMovh3LFyzutyLcvvBHQdo3dmLq7asNJnhW",
  "key24": "g2VMpUSAPp1tAPSkFDyTwMz6pYe2qpNj2m4Z4C3v8e7w92p6ZCyY6eMLZaHGbe9SNe5U81dsBkof93g2HHDkrz3",
  "key25": "56muUFB85H9kZPrFf31C7dUdhyo73NxVwyzQZWJRL7S7wDch2Cu6KWsCk7FHE8bfAnFDZYUPe9PBNk86jPLqMbc4",
  "key26": "2uBDJW4VmSPq7N2XSBD8pw4hpDoKZewoi8LYhsRLJFMAzxj2ZRCyN2ASjhRrGyvkbhRaMmKWDWfk3Y2BMGY3WHY4",
  "key27": "2BVc1kwJ3vHE1JQyDBYao5r6vjA3YuuME7zDA9EaGzPXQDGBMGwjpMjin7SnryEdAtbMezCoyLYe9KjCGBeZUY5Q",
  "key28": "zYsct6VD7WjFd9h1odT1huiyVr4tB9iAZEGXWSbtKbfXanYwQ8KfiYeaiLrm2VB5wsjnT9nBdrxpceaxPLENPdE",
  "key29": "3dEXh6dYJ9VHNk5Gqcyc3Wb6krGXUpn5svwpQ676NLvCWct5kX3H3WEckpJV6iGKqNhCi91msuTBAXgn5eGQTcWt",
  "key30": "2ZynFDiFJbPTbTXpNYwR7AkXJT35SqsqqWZA55fE8QZHFayr9qyUHLuMR8HSgJQZmwfaKX9mCAgbcZ664DgExTD1",
  "key31": "roJEGS9RunB27YRW81Pn7wvZP2qsfVm1PK4HEK3ZM3PY4VYKB76uFmjZUURt9oGM9PWsc2cDsTh7UDiT2bPp65o",
  "key32": "5n2eSdksi4XMhctNocBDLU2JUbv9BJWfS2QHBK2znZybrTXJq6ixy36S616oGVWyBB2yCAzX3i5WGFwXV1DcFMzT",
  "key33": "5i3nhB3Jwmbeott88fH68AKSiPbuDSixMmKeFRWxVZ59KKCjPayrLj8FZxQeBZUKoQECEdVDXfCnUfXjxMZ6kzxa",
  "key34": "5pXZdeEkpeUXS4P9jd2EawNs2Ph236VQKYmaKoCtkRfBTKqcJYxRK9ssPtrekjTHkSXFa3gqoVEt2Ub2MvvfJZxP",
  "key35": "3E33UwPiCUDEDxZ83XXuLmgSYEBk5AoAkegboVsxkjS4xC835NCa7MLTCbWEn42o4FVe4R97NZAZ2ma4CJzaiWiW",
  "key36": "5ZWPjvnygo8XEshiCqZV4iVoTbchmJ9h6jjzocfF7QCukBkARWoMuFgfhUq4N6iPZ1GaJ2yU9ud3MpgNhsGBtbnu",
  "key37": "7mor1oq7pdwroRscTYuvxmsjgEa9uoAHN2H8BY1mn9eqas2E2KbXXWgGEMkyhUEbqUn1wxpHrFSTNSKg169PchW",
  "key38": "4SEhuFDCGchp3nNN37tYyUSr4Sr224SVfPzDwfTdCv43wPJMFX7P9onrMVD6XEYGjTKpcMVF3p6umGbNE3Pi9baH",
  "key39": "Rai252M1YaKHJQtBzhz9ZYDm1oqDpTyvEr4Z2Po2RDeCJYgkxdLpnZ7D65GChKFWTcAprEhi7Qoesy1VPcJufM7",
  "key40": "2jRMchMmPm69r3KCwjGXBtW8eoeVKGqYC3otKTRX22NVrGTsVdXomvYvvjRavWX6SJPuu9rqReKcMDy1rGEe9gwf",
  "key41": "2NwF9Xg3bP1M7HdrvJcejqHqktRrcCVfij7adnKqqDXszWEwWVc78DMTQMbVAhnhVmcnPNDS7PT5EXGgr6TZyfFv",
  "key42": "3b5tHHQDHghvEviSWbG9vByWvF7o7uvmYHHM8ZtWVgxkHvH3N5v1UQuLt61fZCj8DJJ5ZEAKNVGMwkGhNJ6kur7G",
  "key43": "3SeX4dYLvD6tLAF5sbKr7BkuZRbPYo6GbU7rhZqNVqbxZMEJJHszU8DUN9nkAeQDwQTnfGscVJA7q936mrfRbPxM",
  "key44": "39439KcCS7sf4BEkvenKZpwrkJtZ4NTZVE33ttxn2mRHy7ih1N38N9bREsEvVci6JWwEHnVp23EAedP1TZCgtCM6",
  "key45": "3U9vh1jBamy1Bx1M4h3zdtHh9UaPHqLKJnuJkchQdaASTMM8E2xrwB8PmT5Q3ALZTzAUvMct1H2CCpLJwQStSaA5"
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
