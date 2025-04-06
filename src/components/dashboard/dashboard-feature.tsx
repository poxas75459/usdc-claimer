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
    "4tZ6KtdkTBLwYUEzCLPVS5QnpkrLhE1y8JXhvC43eBg65PRX1AA8bNrn177WsdGztPXmcByvK5P6aDGMT7gkWrHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQWyBqH5k64wbLxZHP1AURzFBmx3N1a4AdxY1m3eRTsUWMDvqFt8nneAR4BTuUzgCZQkuySd5qGfEZdGpFpX64L",
  "key1": "5BccwdZCS7PuPPNgupYNA2zQ1fTi6FN8CwazQHssnHCznZewo4krcXSYMfwcdQp4JwwLSnSjddtb7RPvBrwFt7tz",
  "key2": "5qULbASFoY6h5X5yvhVCMUsAJw3ggHiNemg9H8QFJ7kBbQ6oVKf2nuXdQJnUEJNiRgzigwFavT2YLSEf3zEgMhWK",
  "key3": "66im3PQoqP31dNDf8BPU2FbP8n9o6Zzy2AK5YRvmNg1v1Dq5vqVuboCLdzZ6Q5idfgx6szsAezP5EEg51d8mC8yF",
  "key4": "2V4dVwky8Sk3WM7koSf5kgGydvbPzeZCZ3orUvegWLHLg9cRfmnszswjyniKjUoAuSNmpaDExx3tvMAgW6zV1pyz",
  "key5": "LdxhU2y5M4RcQKsXBzpnspPrs3zFJS6W2oP3UR7HjS91Db2GsoByMA82QupVJmobZds7Wy6jWnoUKC1riAabCSj",
  "key6": "4UJ7eLH5qctwXAKAoLPu6thawdeRaKtsxS8EQxzoA3enaGdtNpcW3CMfir3KKtR7fRAXrHAJ68DKzFjQChP5Tsy8",
  "key7": "5wAYJ4csVwZxwmEvHKw68cydaYjmkG3avkp6jSv1isAgrUeLttr3ij8FcCzsR8iC46KitkbL7qw1KfoYvZBuid2g",
  "key8": "2TP7US5LYJCuo6QusAxDsnAXL164PY7b6mkWqCVsoafQUQQUYiexiQBkNaKY4vjBShh3fCwfXTD2chNvasD4hv61",
  "key9": "xhrTtjx6d6LxdsRAHFZm7PE2BJzTxDGCQXxMeZQnqmygvPfG4b8wLjHZieeWBBJdWsLNsenKKLUW4sb2mmDQWNr",
  "key10": "3waVgrmEevuMreWxuiuVUciw4HxuBGf7c5XjnscDKxVZJHNAwq86RmAnUJXL7eAVfR6ncPQn3oUikq7UzEvDbVCo",
  "key11": "5km4oy5H7snWwtyLsbZtF41LSjrN9Puc4xCFFYzuEwvR1rrU4kZYHrc1H3XDgvvkQnDLeo2hrd4m8125EPb3CBzW",
  "key12": "2ZRsEwCv1cYLVyaUuxJCTzdPhrpMQi2aqwDRZrEwShd92WF47kF1oA2YH1s5d3QzsR3UwoAARwiuhpHKd6bXX7tj",
  "key13": "3ShsAfHxKRdi8G8EzkFXS2itH5fQBpQhQcK49bUBDaSJitPeV4bMvLudExCZ4xN3ex2H4eDgnEaY5kBZUbCWgjnt",
  "key14": "2uWiUivJNNcCGMq1ZT1trnBAEwb5sDptx8KRZrPtYP5p7jNw6U2zTAkC8A5RcsP6E3UKR8bzC66xiLTZJoZhGAzR",
  "key15": "4HrinK16sD8TcB8UT7rd78y6YwDCX2XBPPrSokkfyCiVrwhzBvx6aPykv1TKzJdCQRjevNZzT9JQuxWgdiuqyicp",
  "key16": "3T8RK3BFX1pGxA1s8VPME9CTa2TSP88ME3t1xqAdJfuJUdcPAc1oVk3DDmPGwRgWL4ekPcjqyFfAndd5NyhPerU1",
  "key17": "4zn8QrLLj4JX8B9XwDAW74e2RGeqDbxZQ2e6JuHVBGwYaNcnK2SheRNqT9ktv6NhsALQy3E6StaF2Rk6KW1hjqvB",
  "key18": "obtkAbz4rNpovNYZwmRQf39WjBus2P6gwZhzfdpdnNgZnQUd3XbS2YPwYunjy3yHXNjG7R3z7xCanBc1moVJLVf",
  "key19": "33hBxkNdGVrG13qD2hUMEDvqAKDmnZ18tzfzajUAWmiCXQy1pX3xs4VLrjewmCsmd1wThQez7njy6MSXGqZmxP1a",
  "key20": "1NdMzH237QJrNfLrf7x5xB93T8UN8hBxN2jDxEi4X88mzX4bHXprFg6HLioMpvt6ZuXx4rmvWoL6mTTscPqjZFX",
  "key21": "2Em8Nf9pyMKFwaEwh2EGX6TVCSh5uwkgBgMsYvSVcVpRouqGjS8F9eVxGrLUcWQcqKGmCQFPUYz61FB4jHxSVZCT",
  "key22": "5NMtzSovC1Wu9GtKZwRQbvQTC252zB9qXgjWsfyAEo9acRostMPmREjDvvCktXapvAaenXo23bbKUHpNUBVeK4YS",
  "key23": "SfBwaaQRGsqkJU2V5225dfSn3DECgRki8kXfoKYCsjchZ3dn1e5AjQYQtgFSSf96iNku7CTtfMErK1j4YwWbPLu",
  "key24": "3vYV5pbvunM7As8QRsFfSYaWQ6qNDGd3xokUSFqa3cSYomJkTimA9mwaMvLYRKvBiDUbuvW25fQSjBVcYkMf7PFV",
  "key25": "3yqWo2mc1L5nEa4Hdv1LXsTzZssP9J3yAcR5hwnkRH4dXUC56pR3jAd4aKP4bJLNNMXnDRuaFd7Qm4P1vDbUxoT4",
  "key26": "64Q6tJQRHyoGCDGMZTScHSdPTsUaHnCBQoqTEhGQ2iumU9uXeVoLWcGwaqEegsmxe3SNiTmmYtnyi3j7YysQwFEd",
  "key27": "3vtURFQFxSVA3WCX6cw3M9qkbwA3hzgoF3AECTEdwob4Qi1r93AurPTNL97ggkbYqEE9Z57ziGq7An2DfpxjS2KZ",
  "key28": "4yTucEhsvVdnwprbJRijorzmMszZzvqY1UkycChf5JpZEBbDxrW4876Ra9Q1wWFEHpLRmWwoW6rMjcZcLirB1ZW3",
  "key29": "2ypTHCv5ykpTYtr72gx64PuLFyLdNZbNYun915Do4UpiutnCyfFtg8xSxrUkerGwUutttaARjHfsCbW7mFsaxHM7",
  "key30": "4hunEvnqqyrfJ19Q9y3zdy2vuwkNKgNP2imvokvAFgDF9eeVrWoVDN2VD6RKTx46fXmA3Cqawx5HT3qVZjcGWdjc",
  "key31": "2gN73thEVwr93ZU4URDx7FKNnjqgi6aSZK3LSeB3pk1nH7TuVMgVMRikyecA2T2ohA5qGFmQSTg3pupbaEj3RohL",
  "key32": "53gx9q6SEaFXfkMo1QEgRk7xyLGzTN8hvFEbxr8SLWXipF9K6iemVFfRb4CXFCxvPox2k8QL7HRtmEcf8ZxxjNPu",
  "key33": "4ikc4f7rHipcWGmJofox52zaJLY2ujS6Epj8owoRExWK2JpbvasvBZ1JhfBjVx9ZYjmEph4me4aok66Q6SgvDHbJ",
  "key34": "q1GAhUTxfA2fFqpMyYwHp4n5UZv37dkMV8qEKxHJsPSfq92bN2jSKoFFqXJd97zUYD7Yr9mP2gcytHu6SXpu338",
  "key35": "2wiAL24PeA8gVewLJJvBBMsW7Ev3LJagHC2CWeuCGf37a6P4pra1MNHFjYsZf5UJM6JCxL4C8GPJwYujvtCANQHZ",
  "key36": "4HqQuLdHoTo2BYbgcLWYr3EUanwYMT5wRjJEqQTWnuKnFVYJDMR5m4SQszENxtLyeM14AG58pBkVcbNL33rt4ivm",
  "key37": "5Zio6DtLfrax82TLN7DRgEgVjXJaU51ae1r6WamDYHncuUumgv37tb4zp7L13G7WNZVZ2ft7hz8RqLbuE9Udbi1",
  "key38": "3MYRhccjrFiQPk6Sk9tgc6G41hb5CdRiJKP6Fe3FFg3CrPqzaoWUj1dNHTCuscE9WhuyRv15ig6Qq1zuZpFwviHT",
  "key39": "2yBy38pAoYn5wFAGv8gVQ1V7ELjZDvxEP73bGQKcXcunwf9NWxT13aFErpL4nMaHv8CugfK41DFKhoA4NuGvf9V6",
  "key40": "59oZAN1fzF2MRh5qHw2LCwUwWEyVuMZMWLGBeYbyDcfgiNsCxcVnH6m9tS9D3LW7pWFZ2k9GMyjTFJzYBEopiKgS",
  "key41": "33QzaSNqQp3okMqeJ5StdbHvEFrpZj4guBtVYFH2ChJJXNgVFYh4rceymFmt8W5tj6eua7e5aYGMA46pN1QwuVue",
  "key42": "3779eYqCxCdgng2WYBFAYYzTcFwNKbgfpBvT7cJn5oxGJpsGwC8WBWNE43avH3WVNAsQcFdFq6UgpYqStFVVGrrE",
  "key43": "34wHtim3kT4D5kA8zkKx2WoczhVkYcoWvUmQqQ1vNymgxTuXLNn4atrj2DCqbTvaiNvB4nbCmaSThB2Ar9kfNnbZ",
  "key44": "qwXK9ReSG36rK3WRpyD1KqiYM4isPHZZucHysFkrpLdBLJPKcvTU2RK3A7Su1dqpLJWDH76RxUW7cVysqgiafkk",
  "key45": "NVYFPQMkfXofB3SmTNSdoYeqsdFmHjYD65uYY8q3NvswuP8xXYEp9tnuJ9BxRF6h2iPZi5P43DXuWRYwUADQzWK",
  "key46": "57TW4jdcVPaAnhfPNbxz3UGvXxg5gEdE6RWaqbFr9w43pdHoPqF5f5p8rtuXMWafAkbdGP7c6hoDCfbonyZjnyt9",
  "key47": "23Ewtpb2T2tEPfGocnKuYVRyzSRWPXXrtaep3NMWJWjSNBWex5wdXJJTS8pbRV7XVhVsQumqHY6JiNrZczaB7MSZ",
  "key48": "hoy1QZMdK7y9TvQsuEPVgEfeunXsp8nyQCUJ8yqWAhQyGp8nsL5oZ69G7e5AxVNNxJmRZgUEY4gt29fBCoC6q14"
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
