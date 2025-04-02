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
    "97GbHKQRuj4BgBFes8PdtJuCgL4YQ1vwztitqYhdAbkvfVWjrCw5cJdgDMT7Q1pCJzVctZSNXRVnZ1eSfeoP9ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6sTTrRGs4EMMP6r9GfvxkKpwEXPc5bfoBvHDYM78goqmVwmfuzxGDuJEhqM9odj4xDb9XwTrAa4pxdpo9aMuE3",
  "key1": "4wwBJEwmNhPTNk94js55hN8k1cUfAJQf7dQo85rkdof42t3PjghS6o4QYxuVu1ZtYuHUw71mpSMwUkSkxHXN65pr",
  "key2": "25cDJ3QPzu5inmRaAbstFbxhxjENSaNFGy7xs4GoM4Mst49fgqBNiMkSY72upiNxRw1BnbsfoVn3SA2R9ooBkpXh",
  "key3": "2fhrDjNhBbc9HXbEq6mUgfVKmdNh4jQJuHLVeY3MXQ8J6rZNeDF4sWH22t4TP7zXRF2J9HGWPyqDDKA2oGxXWout",
  "key4": "41gJK3RMi7EfSFE5WMsNTNYtHQdoT2YtNBynVtJZMWFg9uoceamPp5zYFFhBedwuVuxT8Ags3RKDojqxLkN5VBcH",
  "key5": "aJ4goTQt9Y7bSrbiATBm9xj7g3ZZQNBbsV4aD4Pv51mBsa8bToeqTV9JzddRyv2Ck9Y9PQo3gZHUo4h8tVjyiqZ",
  "key6": "2pVhAiSJXj54Hm4b7gqHJQFd42U4AZPxYMuJMxvqoYBbHmAqWPEXV8yJQnLS5PQceFFP2A21beyWxS6toqE5qBDt",
  "key7": "uxcW9PSm93Tokgvh7WxiSZYXu1wMN3QLkLevaCwd2e6iNU2MxdVWCSK2CM1wV5Khb8V5UYCEC1A7rpv9pMYJM1C",
  "key8": "2uqhAgQQMerVtH4amcWMVnFn329JZFvs68du9mjo4B5PyHejYEDsYond682QmpQGmJ3mqjnoEFP2sA3BEkmcAaCU",
  "key9": "4KSqJRiCX9aXPH1bcBgFAjpXXtm6hUA79WqvrdxwbCbe8FBpk8SP2KW3r2smdTaZ2B3Pjdpq9pzsJLAraNKVDz1q",
  "key10": "3tSckn41rfoFxr9mbKG9WjFmHwT52jjy2XS7ddRS84qfQy1HZDHepXJUqt1h8vzdv1grLArhunbCa7ftbHxsurKb",
  "key11": "5fitzjVLwtKPLc9xbgUxGkfiMfKMvJS6EnYPBwdCNhGnaVt7uwNtdc8mn8t5NKhzfHHCziEcAVyJrAMVFXJqwZ9Z",
  "key12": "3otTV3q1NxAz3vNv5QRFk7zcwNXZLQvfxEkune5JDGVzCTmkxPCBJTYGRaBEjcYaAkQAQfqsGbUV3xq6BjfZc2pY",
  "key13": "3ixBuaF63Q8e11CddSpW6sNaSzt8UtGKzBAm2wi6Qb5MKB5ctGELWNcYJyEQakZ4hR3skLKQD627bTR91hNqSUir",
  "key14": "5sFYxGvExzic3SvxFRL2BvXjVfY2N474Tqxf13bGh2JqzEfg6sXowznWw3awcJA1biYxCi6KUFswFfTzJiFgXs88",
  "key15": "5i5d1B1vn9Fgqk9YWMsX8cQ21AntbnyzLKqkTezARQjeZVGo5uS9Nunj1CqDEVGVsHK761z9tvc1NrV5eUNg6i1D",
  "key16": "5nfFwaTzNStVyFXMeRgThHo6kUv6ESAD6jHvEtBMWzrVTxH5Qy1XYBwWBZVyXuSv4nuydaaeGu6favf62nN6JNXV",
  "key17": "65RUN2ezWgMTu2BZiWzncQc5hVcYh2EaisHHSdGSr3Hskkhh4pswcGSgzAtYoRqmPsEmrwbYh17zSxxXitfkF9st",
  "key18": "2F6Yya3ah44GvrjAQH4qbjtFhaXi8QTCfmyZNdyuEX35Gq6d1v4zaz9vR5A81UEcK2aRJC1tVJJZwEx9CgJAJ7Tx",
  "key19": "5MwcTHfCQWAS8AnopgfVvmFxDKbvqrScUANVHJsjHhCvt5eKZJUtCoYHHRSPhfbENKrWVbdk16M9gSejHtQG4GnC",
  "key20": "5fQnepxNjkf1V46LwrjWZFNgDcVm6VGFGhxKQSbxE2rTzgypQ1qbSuAgnz1e9X1AYRb2FNDZZCRHuY9FWXBhtGVq",
  "key21": "2ZmVLNPmRmKTCSu58vqQM7BvypD59mrzDNgqKyBSkyfnsAtWQJPFhqnW4wz2JwKqD1YqCW1PPQqAHEjQfv3ZN2zS",
  "key22": "3Xt7tGVdTyt2C6qtJPdtY83pfZBjby3pbpLMKBdb2YZHkpr4fXU45UTsFxgUC7mXybDvwy3HsxXobsZLm66B7oJ1",
  "key23": "3xKNKW4hDQP6ZYk7CFn7tsmg6hNFDVim2xgoXKofubMj111qwf4Q8jkiiAtVqTBVhxZVDenk2cBDEZ1VS7Cr49YA",
  "key24": "PUntu4uxbJFE5C1khL84Pmc41F2zWAvwi5yGA1Z8mtC6CrFnUqJRbETvi1KFJm5vU3wUhoEdWvKrz2KmEa3g3B6",
  "key25": "4iU59PaiZevbLWP93gxf16LCWyYVc7Tu5KT7wTUYKiE5LkkcefyWUiHF9ekWgH45cfcjqTBQaeBizns94NCtTNNp",
  "key26": "2bdXotsMBXRC3RX9u19sUd8hvTG9cacpBXvr4FkKrWJ7sesw15KSBwBmRN8kyTsrfxtiZWTeRq6dpvk41BAK9VpV",
  "key27": "4tMWTHUNjiB7FLFq7fiBdUsDVd1rEfG4jdkpG3tw9MZcTBCzzWkdJ2WZ3Gjtudkkm7nQQ1redvJLfwRg5pjGwbP5",
  "key28": "3qu5jzUc4hanwHvPLXKh8iVxxmvu28MoNZRh3sAPh5HkvCarRZU3YZebtn16TVoHRhX5xdpYjSWbKAH8xKTEHAm",
  "key29": "32x6JRL1sucWMHCmAE315LcbDj1YDRW4R8x33GHS19RZWmaUZNFrBQJhAjRgv1ARUNr5JbkZ4BAPcjnzm1MoEH2V",
  "key30": "Dos7GhEfV2fFAsfwkJSbFN1gZa84qoyq3LHta9EeLvRuzgJcJvp8US1P8tMKtoxVnWWNTjQXaApyrWXmbCWLKZp",
  "key31": "3LF4MQt2rjjU6gz18UKaCPVG5cp3xfg8Ud27WHS1heCFbLL6pQvGcWduWzCdYYRPP922HfxVsDnnCd7DmPZxoCMe",
  "key32": "4JzPrLHihsxutdCYmRkQXGKSj5oL5A6bQv2oAqL1mgP3N37BLSfKNhu85Dasojyk7njmBfiD2iijkhvCBxaD42eT",
  "key33": "5pS8xyjJEt3LBJtZBPX4ujbUQKibN2o4PYw4Qd19BAXqQSgK5kJQQXFzQocoCspzk3k5ER4hrqbAtzmCveWbywa",
  "key34": "25gN9tVqPEVy2TKZaH3dxm7RvMpRdX8YZcmJeZLVKqXEExt7yyKPunDDMbSCWF3nUqUFmntD2dc2oT8wva2FG2xm",
  "key35": "4UP9UPgVpJV7HN7BrkSTckwzYwrqGETkxSK19o6FTvyCRV6NDZQR8vYBcuSCnzhzo6M7XgPVskKLGndB7LUQ2ffH",
  "key36": "2PvC6ZB1heY5ZG1Cctt6rnPt4SzcczjwbLqqUKxppkivJuriDj6EPWtYFWfL8YpN2ZsVSwR9yRRF8nCYa2gu6vKK",
  "key37": "5rZbyvz8Dxb9bhEPeCX4Zbi3bUATSpRHosS77h5AsuHEK7rtqbiefhZN9invaCJdXBZ1FBqc6fonerZNLZy3drmS",
  "key38": "5p5JpYhGjt5VgKmd3xBPDDRyuu6k8foSf1LzRGS9qxanmHWmQrc2KgQDxUibYbaQ2pN2CAVKPhtvBPRW9mXanBaE",
  "key39": "cGmC5PypYE43jKohT2WVLzDGUVDfVDL7ziDNEcMb6MCroAqNDWf8sjnEG6UQ3orabgiAu5nnSe5yenJLMUAjnPr"
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
