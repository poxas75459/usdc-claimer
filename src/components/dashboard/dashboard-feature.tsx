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
    "2y9yJdSUp2tShGT7wJMsShLi1fevvM9CnxFAVcVyWZKByMBs3Umm9ar6MabNZjzxxMRyw6QyyMFpEX3JYsoxUovx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61jP6m4Grp3VhJSjqfW9mUjTSS7Uo4P52sUAUjt22GQXVwgCkjJNk6aSckEhSGZNrnpfpjjPADkHxJSZzZtRLykb",
  "key1": "29mgKMMULfdgZyorV4FJ64qcEYbxGkji2aW4Jj3adtyb18sskx2LzfLh2eeBYtcZwCQ1V6qcqyzvSjDVZvDAWuK6",
  "key2": "varmGVfdv2Zr9LxgnkX44isQ1GXEbzytQMAdtpDiXLUexbXP4TZegwynard4yP2VTra7dY6oKVFsve1Tra9GFha",
  "key3": "47jPpLXHzkfkeFL39f7quVZNVAAB6xxfcXwLN1Tb6BQ13jN7UqDppAmbqe1zSrhE4xoi9P4tz9xWLHUPbZ7iVL3T",
  "key4": "4gWwRucdxxbCMryPjveSXoVywKZ1tGDpQBsbuLtzuvo2WtRuHK8n119N8TJBN1BqwtKDYSp6PhnFE2g1J22s4Msd",
  "key5": "3zkiqFHZuzcQt5SUWBx5aLHr1VRKQgBQSf9YmsjMY44Dv7H2wjN45cxTwoWiNfC98fay3TX3n34inpSqprDbhWdG",
  "key6": "39iMj4hTYgkw8wPd22LFCxcQbTdhf7VyqV6AhzVQf8YBtWg8qqCoCr1NGnWwShqVnKANqqZcfK8YKQGGRbCr4W1U",
  "key7": "ESMaNAkYrHRL81Qz5CCzSysYSrpHTVk8WCEXrkz3kYXhVk9YACHgsDqwKP5knNdC5nRpYjLMtQCaMbfWTvZ3ZxW",
  "key8": "51HndR8dhJT49JSv2EMFtDdfkT7NcbHKqCh3w73hNaCt7DdfDpnvo7MX4w5a38YTF5JT9vezCXPMPsNUFtHz5ZFc",
  "key9": "4sn3p3sUte3vevBHUJpMpiFVtJ3o7JnLTE5C2BRPJLRAQUS7cCv4ruRs32JpczyyBLCMgaVMA6wiWEw4c9WZxycy",
  "key10": "4zhJfUpiiPLnsJnZsz1NgucFwDxoGTdtbCasqeV6AiY1Sc68hp7anskkkNLUW3fTFnJmkope27rNRCdGNiW4zxVm",
  "key11": "2i5zw8iSGiUYTKKf2C4xrGf1gv7WcfgnDjGvLa2bHPv7t6H5NRbd8yYw2puZ56RwwiTuXhcTLWFLNXN1Shf3CAvf",
  "key12": "rt69T6Lybmzn3jU111sUMJTpLv4XKkjreVUhmMyr7JhjT7Hc8oVmc9Zvy4wjhuTkFkipTdNkprjP6haz1wRF7zB",
  "key13": "2LVNM1qL3ide5NEGqbbJZ9r7tDmBN7uSQj9xcio3AA7wCFLrHqhUN94dLnjhQupso5xZLRpcnLUfmvv1AzcZFoH6",
  "key14": "2Kt7MvPicyv3ToGFf13MTSmfvYvXfWFJEwNV9DvMfRAXiHuCXWeCytccaRoH23P2QVdZsxEu1i8u32rPqK78Hf45",
  "key15": "2bcquCmqFg1uri86MQ8njYHNSjvEyva8bPoUkstv23JVePHYPPjqhbM8qRLdKtYFsDDjJsNKtCoUQynBWvaJHtCg",
  "key16": "45Zs8MaqvvK2V2Bqwpa5yr4qqekx5GGFENiiXf6LMct8rGLVHinYgTQJKt7NXsWZKjNv7v3AKg2gCkxpk6cXRkgq",
  "key17": "Ffay3fc4f68pZ8aWkTB4uwmhe8PV4N7TG8gmndpZ6SpejSgzsAimo3Efi44gQXGPT6FDeozPdCB6xYR7XneJED4",
  "key18": "3JK6nChUiGnmFFrbNjGR7ECRi3UKLEEQjiMT1oqsrPxJovT7UGUdquvN6BqkGj1mWqEHDXaWwsznxKasqpAbPS8k",
  "key19": "2kPvNFWKUYrWcXJy6CkJ26CXNbFjLE3qJfifvceYE4u5dubKYxyACtd2889NTEDkUsZWnrHTCkkRywfcHALPyc51",
  "key20": "2LdHRBYVBCB2JY2oWhkVi8No23EedSi51YxJGyLUpAzkRxKP68GkJAf2jLyuHM2cgpEaFafS2ZHBv68e5iLNnaTG",
  "key21": "3iA2f2CZny3RoVmNZfpKDvpfkR2rqxpHShHNon8xWZKmpPuXMQdcPAFcLUHX78uuKKadYDUGyCsYKB17mAdVegAb",
  "key22": "3s7qA4KbnJ8iiWXnWSwfHEk3QFMVkuTVb2DSc2VEuk6zC5LGRjZ84VAM1qNWEZnptA9DUvTJUCbVrYbRydCiCXak",
  "key23": "3btfePQ5ZAppuHntbz8iR7RDvargh6XMzySB9WG6bCZ7pxKC6pQrfPizQGpr7KVo8oenE5tfyi9kyurbX1tSTTe3",
  "key24": "4sNwxjw2szsVCMPphb1bfrsnqun4kqwH2N3QbNpqKJ3hsZEwH4Md6uq5JASJWnwpGT48THK9YQa6xYY57kZr7tUP",
  "key25": "2W1815STmSFcuGKBozC3K6Li8c8Lr1wYTuGTWEgTMqPncCJPGSSt5TNn4fby17H6qmHARM7DXJwRo3umXeiABWxT",
  "key26": "2Qht1e534sdxcH8ZwGb9AggxX5ajvDdjJSGrs3sWbdezi7nkRnMakSEh76CNneWaULTXCWM4mLYUYUcJKhH7i9Cs",
  "key27": "3CSpKwYX5HzWY6tRXBE51Gph8o628onxKoNUGN3MkLJAuspDvycnkFErPKtTMNxBLaX263jXQU4foS2GewmVADXk",
  "key28": "4Z1Zgw4JK1X2LcUHrkk2vJqnA3NCPa1cMkWC4619c5rWt6Yg7uJUzo77Dw3yWrz3BBDvZ3ub4RrKCNztw4SUwPNb",
  "key29": "wTCER1GuY395oLSg7AQzabB88Ms8ewYoBDvbih7wYgZKL5wJTmmQkp4WvhhhZEoLzYz3G3TDPBj1k13WnLvjjig",
  "key30": "5LW6noJjBFLZd8jKHuptNth8WiQwEWeYzUeYiND7snWh98z3LDZeuP4gBfFd1KcjGe4GAjxZ3FLPaAAtTtEDFzUt",
  "key31": "44JPiHBmCHXChoCtwKC7iciZGuZ8ZHvfAADNgf3zVo67iRTBYyZT2ufMoq8m1GWHYRRFhbHJFvC6KDUVwAnFwSV9",
  "key32": "51q9tSNZkyGDdtkktmsd4sXCc8W6AZpQenLmMuTK6JoHpp7UYpGpajvUX6estBXx25LxeFSNnzANcA4Whx6qX7qF",
  "key33": "4kcvMw6z8ZaDH7jCLRLw7Eiv1nK4iSoSbx4Ruv3pwWw7rrqiF6EQ6z9puRbTRH9Haxn6VLyhiCRgBW5vwbmAsj4H",
  "key34": "aWVmkrYiueLAPdA5fA1XJHEgMp8oCxMwVZvXXHR1koewi7aimV7Vv5zuLiREemEoZUrz21La32LXiaBu494zSAy",
  "key35": "2B3CUdifvhg99bqqcpwUWWog7KuMc5enPzGTWYVipKMbKZk66aeCAN4sb1bWUJBEXkNVGynVkcau2TFTJm8FZvz1",
  "key36": "5suj1ckmE8cSybjM1Mg8bydViDetrAmgrU7SYpzYtDczGmTQxwW3xZ38YUMWJ6icbS2uDBJ8GYLZjFdsrizoi9Wy"
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
