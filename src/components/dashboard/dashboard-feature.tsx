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
    "3oK4t5vH4wdyAeiGeyiun3tvjBGHSeGnbDbW848Ch6qzyuf8uVjVPc4yXQQ7pPdkFAk56D9tTrseWY21PKzcFUAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dwUGofYFLMYE6HxRCYmpikedPBopP6UYCo2azeGKWzjoN93Tugcz5j542nACdFEDrDoKj7igHWPuJvhfSmPNimj",
  "key1": "1SSMadUFFVxcHGuW9H18aL7Cb9N3AJDVLnfRzVe2JauL7H4wdGmQW98LaaWjuaz9iWs1rsudDDbNGvuVFatEQDb",
  "key2": "4DX1Mgq2eprSk4ygbxgsj1e5Zpr2cbdyYN8NVCv5nHj5WD8Rci8XPmceQQF5SRgeacWDQMvVSxKNgmLxuDZzEh5L",
  "key3": "4tWuxKm3QHpSfXo8x4T8xtSymQL1kFThSvJWxyYphXJHr8tMQtU3NkKA8yzEFizKkf9ZdpcZa3edaUR4ayoYBGnV",
  "key4": "4omL4aeGQT6j6NKNPYE52wts9U22KFw2UrEQvrpsbB9ymcxGFmRzMaBscSKUq4FhgTwrTZC4f71JCdc25BjHc2Py",
  "key5": "47MdZ5rBkaCyymVSnWhTwCT9rvNo6vrzx9V2mvHm4wmfhvK9NZLQECqPMebfJy8NPMmcZ8xTcE6iMSPoWSNFVLyX",
  "key6": "3UYvYm3bhozwkb6SjwSSxA77Gn6C9MQLecgwRGdVzdffMQM2eHiDDKEXifwQFTdJWg4sz6XCMnXKEKppugqWPkdQ",
  "key7": "5FCeaJidcwcUNjrWwqUKxcZGvTQsUywmCD2e9u86Cx85t7NDHBvfyA3Abyxe2K3xfApfU4uCkcaSy6J6VCMXdstA",
  "key8": "45gYmV79XLePPr6iWYnR4WMd6b1NJURN7wQQXieodBMd2Keu1NoFbKrowCG3YnmZ4SUa53qJjAawsPxthdh1kRFc",
  "key9": "g8Q7LTux2PW1PBDmhnjhxTuZQYTSiNNXXQHWidwoBTPugGmpmP5h8HJk367Vv11bdTwk5tRQMxwRQQgxwJLDyeo",
  "key10": "5CkPjCDySEmgdCqdedqEk5RHRyVhztvKmPrVcydRrVvVzBFY8tAgdDPE7JoQbN8Q6RGFEUkHzRaE28CQih9BFaRC",
  "key11": "e3SQnMZVbgVMRV2mRg5eGBW972DCMWbcQJBpvsWS3zpKSeqW8XTEErG6Pnoi5k6EkN8UuLDK8nLSCRWhD6x9wBD",
  "key12": "5bJ1HfwyLxDbKscnPVujhqWCZLv9bQ8py5uY3Xqkg7NAGZfT81aDpA1XSeaqX13bLJYaBV5jXMz6A9GtHjBjhj7w",
  "key13": "5u3ffRM7SvY4JHfQbQ9pd2qngEa4q1FzZnDwbJSyQLWNW3bYTSimbNqq7tyEdighvA9Q7atNwW6CwNXCDUnJkZFk",
  "key14": "3RDWgg8fQ6oHP2QmiBrcVJG4P6xwdQkUoRcQ7axkk3SNGsZDbYRTB1TKTgcvyaiSLzeEHsmEbZtAchCv1vHC2gfH",
  "key15": "3Zk1iwZFwpoSoGKY6R21oNuxhGEdqZ6cDCi1tCapKyAwKqbTbHpFHghncYdXVx1dnR5n2nVSTSMnTUchbmUHAByB",
  "key16": "2At6m8WuoQp2ZBcfq1Dkjxq2taoSenV1eZpywRBDVYUBQiHAiZYzxskXGowAPw31DJqmVCbBHh5XPD5zrES36ffx",
  "key17": "2P1NJ3YFLSCfK9fpzRKhCx3J8rVJhSG1gfBnZTse26Y47gsMPPh6UnGDbJ8agF3W9kd9PsYAuW5P5S3zWsniUXh6",
  "key18": "3N3NtwamF9rgAWjdNQoboz7PozRmKqbWLPaS1utsC1Kt2akqRUBbrMmZiEu45LFDaPWrhjtkzrwDm819g52jYVTN",
  "key19": "44Y3VPkTjgtwpwQgcZHFtCMSLZkLjG5eFt4SGJ8ovYZPCvz5jdMmHbdKqkhCKFhc6uNvG7ewwLnreQUwnrnpv2yn",
  "key20": "49x4hADq1Wn8DTve87oNyrcgMTW3gTGx5qKe79AMeqP8v8u7F9yoYRrKy6Xonygmo7SDN3ytKfVWuBunFEAdtm9M",
  "key21": "3RksQpfbdru2FqHCt6TMnPDWRnJvEcmBDNiPpqyTpKDvCdxtCQhQAwueS1H4WtqfBjajJY6DAJc2xFW35UnrLGuJ",
  "key22": "52EDhVzKzHicDn2xS39FzfhRN4GzDRwTKerS4UDbdVXJAc4twUWujHccPzviyZ4y3JuFF45uH25wirBTdaqTtUMj",
  "key23": "3ohUasfs88QTwUa76Ni5uRNiDoN7MxuKprewW2J2jTSwQtV13cnLP528SyshXNix81LigWC9szavPqPzgUY4ePUx",
  "key24": "3ZkcRW4eA91ZmFa55kgS4xoQobm1NwaMpWnEpooQNWxkMsTXxHBrU8CfqrzQk3BRbkR7mnqgkv6JZCiwYEsUuAgq",
  "key25": "5zWsPSwF8DCrXnz21WwTCq6het1uUGK24ULQrgS9JZpiEYUwydwo4dYZMvpj2eqdMxZs1bry4AXNJNCWbf43uqq5",
  "key26": "25KmYgG6tJLEVwW1p1cdzgHfVmBkC8tDP7ebe75eUHZbAjsq8L7wgN3ZtrgcBnnTUvWnbqjD8Jv44KRDWTu3WFDu",
  "key27": "9YVcnYcJWQU8n8hnzVUjAzFf3wi85bq28RbeXFdTjsGnmQAxnmcdSmnDwYgYCB5GzDYYxcadzh8EXUP7vBe7hWk",
  "key28": "2CZK6XZ7uAqHoCEENuKCSpYegrg8K5KP2yP7yiNHQtr93CX9Gy4hjhQ9LaSvdwA5EFfSgkLqGiZxzZz2E8SwaYww",
  "key29": "6Uq5Gahxs8McXSqkxigBV2VqJhsrvV1Hdd1vMvARzCoMBQcAusYCKBPdXyfvBptc8zdJEGdfiVjwbEok6jipKLx",
  "key30": "66NKoKNHGBWxQPs664uhVE1vjeTKrs8ZmQ8kDRRmR6Ru259uUCviveWZkTN9UhgC89DDR1MY4zj1d6hryjmv72TB",
  "key31": "5qV94Eq4wRqriaUk8yBYyr4YFkCrYr8QtH491FkCkv7zHGfDKnXz3j88HDdXgVJ5yds6F8GngipxbAZAHVr82UEt",
  "key32": "AZgsJXuUuScUfcCvVvsHm2tAsJtrUEeapYy1KBcCgZGsbPdzkzhmrv8YLETn2BEegKur2Aaj5pMqm9Z5CuaZw13",
  "key33": "2AjiJQfYNVsvAgRHyg2VGecHaPbcrersd6EFZPqrsEETNFW9d4qEEornbMk7aXtnU48fMfHZtSst4gCfHP1YbZBx",
  "key34": "3Yo7WNPYhYUqh4QUv25DbkAiCWYggvFfHZs6HTF1kXnxBTFxBBxduKT4ywFnwZZYD1TmJpgD842NjGSiQ5xf2QLN",
  "key35": "4h4yy158MGWkJDuzXxRhHkjZ4uv1ZnAeCsC75Bn85MHkP7Ha87k3qaPom7CMSffyRJqhtNXFXWky7mfGmxJUyqf2",
  "key36": "2MuyLJpivi4hnieFhfg1L3EpXSXPUwGELEmuyDQpUqhFMb9GYSwnZUBVjycHCGXsJfdbiXqUwqzr8fc62kgGixHu",
  "key37": "4g8p7jyuNt3EocVjtr4RvsRgtvHgDokJtxY6ePz9ns5gF8wWx9X1fkYKayaM4EBGK3xtCLc5LxByNuZPLuhpc4jJ",
  "key38": "3QvVyNHFs9ua3px1s7dtjo7dyjCAm8TpkSuMKgPo3mLnXARD65GLxkSP5aiVqsHSCkZm45W1PJEMqz66NevMr4NP",
  "key39": "54fPSeBhLU2bQy2sDdvzmz2gf5TFfANsAwKZQvJsH8HS4iMpMLo8jZWGdwk5pvZpNiB1Mk4skAhBZGVPY3XDNQwY",
  "key40": "zg6GDc6jTA9BjqoQTnyvfFjFeusyGZHv7RHghCaD6js2YZ1A3h3ckUQRicfFGo6b7kC9xanYU9HWZpkuJoHDjFd"
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
