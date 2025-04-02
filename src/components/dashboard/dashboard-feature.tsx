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
    "4fz7AdEQ6Z1D28igGb8ojbr2EVmDqbpnnzMSd81jHaDM54SQgUd82hFnvTjeoNQAZzFkG4NA6kCK56npXXB4kAKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jbrgp1oKzMZb96w8pdRivkSEnscW6SBdfhhgHpxDJH9ckUPaeF92ByRV3PALwhwz4AV8KFDk5969AbG7DYLj49K",
  "key1": "2nrqhqZynaYfqanca9Nu7wEBbxCKzChaGTaD5MnjYZwcYMNKs2KaxuGoKsENmUS9eiyuXWrdXmNi6EkZwZiiqfvc",
  "key2": "2y6MhcCzfVhagpzB5MNDBpqX9SEKPbBNaT4MmCRpW65Tq6eYJRJD9wgeFHa4gh7CAdF53jt2KggEjxX2K9zwEKrF",
  "key3": "4x9ffK1eaCxQV4ujCTmsybhq2dg16gNc13oSTgw2ut3fsnkgeXe5cZkiu96VYSwsLPWevqRuchMT2YUFwEUADiKQ",
  "key4": "GUjF6VxooqeKWJbJc5Qqaeing4CqncAFgQhYb7VxSxY3meFE9U7Cr2bvzeefUuJqcNSdjZk1L5kFLYBRjEK15UV",
  "key5": "47gXQF2QnbNjVg88HZnndyjz5GMQGxeSoYJ91GofiXVMZ2ZPSSt3hkY6Zp68WNFjsSXhDqSPYVv9jDPYg6s4oUoh",
  "key6": "34BiXZKfricmDcwcG3uHtZvd1iURbLA5CRc31knBWiWZPCpKqEx5WDZ6xQyn5J6oFqMeH3gxH3Yjb7qLdT12r55r",
  "key7": "4PL2nrB1TZ3ou8KatbkhbKJJBQA3tNbFJWYFZkQSv3yYwwAbemgtR34V6ommQs8erVhwMxJfYgSaFY7XXKH6yCNt",
  "key8": "2Vyos5j15xWcj5xq16WtF98qw8tdxcipedeWWKwPAcBcga4ugeJR6rrCWvo1s862M5UyF5Zf9Rxr33MpL1Qg6CzR",
  "key9": "4WA8wLRvjzp8qXGYzcAkBZX6z3uhvFMajAB1o6fyUZ1qu8zxDo64o3vLvPjmDHsTob27y995gUafp7JhznonPRPs",
  "key10": "6Vz5mDjdHYm7JvH4GbUWUZhr6S1dNEf2SdHhybaRfRBkmtNmWNAMsSTh46EMGcskpgFCK7wzPsoXLNmyS3M4zAt",
  "key11": "5WJ3rgubaM4u5URcvixsKPCxfuBSPe6GDn2gQKZLmrKePnwUtF153imehNK276YCbGiRHq7Cak6xaRcB5A3X3rzB",
  "key12": "2kd2WGcdNscACtXXo6quc2t9SH5xzb4RM8SRUU5yY7UitGwe97Ju3PBE74wNLjwMX2eqnP28ErNaTfKy9C9rQTdR",
  "key13": "2HsxuJ3cajy7F91rrFGU7X1xkZLYiFc3gqus7WxHATXfHr7aFmUmzYSo8qh6aZomLRmVLxVbojFySXD8R6tDdHsP",
  "key14": "CoamMd35k7ed9cwaBXR82BCUxU61XMyn6rgxM5oZQFTetceHwsHMesA8uVr7SbhUSuTwdTuGBUFbYDLijuJye8T",
  "key15": "2zhPH8hUWSCT29d8DszSYmGLdW7ND5rQSZJJZTthPozpzgYsXSrgjPQfbRGextjBA7iqato5vS2XruW7mrDTDQB3",
  "key16": "2AS2w2viAnGrLJPQQH6kF2in7hNWE32N3NMaATkZXM3KwpZrHRdZV4vrCYVzCsdsUHpJBNK1yU8AyP4692VVrwVQ",
  "key17": "5rBqjRvDXTBsbFvYXFcJeomBqZV1K3oauWrKVatAG3FcvxSTGe21ZShPGrqMpgTwTo6HdJURwVhVVYVZr1g9WCZb",
  "key18": "4bMBU4wogU9UiXjvjxZ1rn7cmaEdSJCnwCDARFMzBYXgu3ZBTfhzkhpzC79Y46CF7CUDikJ89428d9ZPpM6hTR2m",
  "key19": "5uxrjEATzLfmBtY2CtifSeWbdxAGD7DQecnL7fsnmcrnQd4KpLbjf7s6tAvP4gr5w5MbpEDfL6T5fxkdWJXFLvG7",
  "key20": "2vWKKBR4KrsAUKczoawUzoTecDujoUoQvfMGXfwoeTEXDH5W52z44KwexSZWdfT2oc6FpYhHh24ixmsUJmnbvcyB",
  "key21": "2CpLiJUxxuFCATxwdkHU8diUQLYxtWXAVdDej8J3jKgqA6GyjAo7xxmeNym5iGiipav1rKU1uJsPc714YqzRAu7",
  "key22": "2GBmpJx6ksmk61i4SZTqCXBNSfDHsRtPCYBJtoR5jgvi843f3ghBb46T9efcnk6z8BX1paweD4nPC8onUSat2DAD",
  "key23": "2Wsm45zGmmp1CPoDDAeR7YEyvrvgKx5Bi1SSH8Y55iCZL4fJwmmPLTEyao2ieiT82N46atosdfxkBa8jRrDrMKDS",
  "key24": "4SHYWNrWZSGj9B1kozy7Ab7gVPCdWUF2mzfrpVoGiLFgKLXSHPfm5UHoakYaffEj4nD7scFJuSD5F19RoHF7Gwni",
  "key25": "PgVNVBuw1fWnP8wTc5YwtzQNeo5moCHjh7y5NogbkVHnr1grXazEgH1nh27MUrGf89pu3LjbNL6P1romKTJL96o",
  "key26": "SmnweXkW96ekSLeRfDkFbWMEH9deuR5fxmytVf2w837eVZa2bsqf77pBbjmXsxqXrnRoz7tcwJ6b9T1FC99PzHt",
  "key27": "3f4Tvw5MVzoDJZxbsQJGwtLRih7PJSygpLnyj5cPt38fXsxsHw8ChScivu6FmQcs4Vfz7V22EMHzunRMNQ8N4f2S",
  "key28": "5st1xs3mAbgBGVuYfnKLwZPZ4dq2HGG97miNtD6g1hieqMQn8A4RWunjnZG5wjYkvcWp8HzNVmZ6SZPymD1vGDrU",
  "key29": "5PcJ6fs3spPj8yQ8SetgrFq8ZuiCRjrevZXaSGH9TDmuNS8EhpCCeT1iWvoRMCc7NbiLC2UZYjuZZrRZUcdzVisq",
  "key30": "zjyipuEBjimxnoCqsjbHb27cofwkeg1JD8nLmNQqUjfM2hQBgcaAacoRbK9maPKWfVh2WsJhMt2wpkEfpzNoEed",
  "key31": "36WuResmnSPqnTaNCg3c9vhGj1X3WBPaSdqa6oTakud1XnxKV3n7k39NTzfjSxUat2yyL2obV6yHoEwsF8wk5XLL",
  "key32": "4MQfeWLp3QBhKnzob3HiTWUbeXKc3PUvKA9K5EMKSCHf5f9yexq749SNvFCZPS9G5UFKZUfWW76835JQZ8oHEfTo",
  "key33": "676ZguQEYHR7f33WqRffi3Rym7pV4bNM3jdekS2NCumhGAa6brEV1Gqc34i5m8iWFCYSPWYXk4xBoUXeayCCBES4",
  "key34": "2JPN3BY3nHWdaJmw8uv1Pz1dfNgS1PRL7FCrzhca3ctRfQPY4B5Qs7Bo6jNMb6a3S4p9EjwjpyzPMxJm1kC3gWHE",
  "key35": "4CBBp3aHLqkBwwJQsioRhyFu2xafwLw3f6xcoMrZqBVSBLrCevQme4RHnyzLfLhU1tGWLSngKPexsWzwt1mJtjzp",
  "key36": "433iCymqJSf29GxBo71fep3mH56ifbWsfMy7aCQfAgq4yx9oZTGbudXDRQe8wMUzhDuNduLYSfkSTafZiN9ySvmV",
  "key37": "576YdUKBCqStfndHvXDsAHmLET2LoieiFi93ziL5g9Xtr8RXD99cauizyYDmcEhVFJS7YasnDDDxi4tcrHg2bLhu",
  "key38": "3PMJVUUht9LYVqmavuYTGpWwCgA87HYS7gBXYff8uVkJUjohZBe5GAoxszajVozZbPRVrFFVKQDseNdkHfeLW236",
  "key39": "2mSsKaQMZ15Mfo2sA4Rkq4zYxvSYxLXDS2gj5qMi7PTV3tM1vTtjb1Ud5uFr4zAb53kWVhumTjhW1VxBXriFTiEn",
  "key40": "5uxvuNz4r3D2tfE9WMyPaC75LX4MB6U541A7k9RofMjmFLWPA3Ad88Bkuovc4MCSof6HvBvr94RZZ4bJrxNzJpED",
  "key41": "2bf6HbXd6yHBLLbbQoWadt5VSP8UYJEMQWMdxicQRFNjKbjvmX4GvN7mih17kTnZBCZvEF9w1tX7DjXFwF177vLp",
  "key42": "oe7GVYQh6KiUHbPBWmtEVB1yEvpzLBcfupLWsx3Ko7S6i47DS3PANLdMKcUZj8Va5vZdTeDtnMUirpDQT9onBVV",
  "key43": "3Z4k5egGe9ThGpacAPcia3pMJne6uyAjzPn2TAgQAQcgS5EQ2dEDPw9FuRb5KPX3QBqZ6zCF1rwyvs5mg1pztBLu"
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
