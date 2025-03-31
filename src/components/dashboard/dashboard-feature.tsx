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
    "5ANunW9HKbC9pvDugEaP8D1A7g9v6ewu7XKpzf4ovApwYPrPWRdCWUYLQwTKaY1bg5rkSS49aPjXf1rCctrn3k2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "359Wbr2eKLK9gyR9cYhoYmDDFWy8padWC5NRRrMudSsoyqX2EWrTux3bjzr1pSDBnLs3rVAPhU49waVpMXZZ6W87",
  "key1": "2tn1nmMX7mVmMs6MfkA6ZWqTUUGBr34CmNG6Tzw8sTnenaLe262XCyP6tqQMncnXND8stWajM4RqioGNA9fChom7",
  "key2": "WwVnVBFE4BSY6w1tJh2wxwFdV78oQnUFUBZyYbSZ7ZYbywbSRW6ErzKYVFspL428h7QDfnJc2nQ2MSofen9D6rR",
  "key3": "3xRXqJAyZUKDbzHsEYt2JuuaT43pmfhVT4kmnMrGtzx5TSFFsB8YvSFxrGaNpmDwVNjy2rNn5fyPM5cfeZ9D8Xi3",
  "key4": "4Q6f6PSegJFhmBTfAZpmb59fkeLXy89emyEbtapSi1uD58ny1xYk2abhoAeur4raA9VS1Rr6ei7T2ZtqHWTxaArR",
  "key5": "5a9FxQ43sAinyenjfUGuUF8jUfDVNFNusDTQ7ji5o3mJFWfQCjXfa2LRiShigyj3KVfyxfs4AZWbyHvLKfu57bBN",
  "key6": "4gfGnVMU52G9cXFVut7Kf6BsFT5ruhQcW6Mn8UqHB5Eh82BNh1DbUAZWUrASrrk9hgxA1BVC3kmzAMs5RHLF1ibh",
  "key7": "66Gno5zsf2tFwgW4qiwRAP69qU8h9sqrXQhy27tB2D7NHyrsMqsYfd6vS4e8gkZ6TrGZTeG1x3L1UAMoSB36Vio3",
  "key8": "3R5qLmTWcBVLLKyNjeb38qxMptVdLea8BmitSDmFupny7DsbfwrraCuaDNU9fdE38QcXnAEPjMhx7NmxzR21TXNn",
  "key9": "5mcCyKHYuzesLn61xBVVMmn4K1DoNJnfx75TBtqF2iFGxfMc7srGehXFVcgFgxHP2b7PEM1p3EJHpB5bqd2aYpYt",
  "key10": "mQdkc2SBUM8RnmF6iKcYc3kqJPer1k6ABYh3UxfHUsiLAjwKmAzvHc74kqXF5hEQZZQUUgiSuVrbHcG1jnTePvr",
  "key11": "4DUpzsp8TE5uG2FgxMy2LfMTxhzy4Jcyvu15NGAiRW6e7s39Bvv2Fq36i3raCiWY1ueBSTH1o6ixQxvBpAVjGitC",
  "key12": "56RBticAjnaKDR84ptLebP7wJheRivrBHpGCs1wcatMnw6CfqrMSTGWvBNxJatbaJpZWSiNckpLnvRymFqADwqiC",
  "key13": "2ZZBk3cGxpGD1nuuMeqmtJRJZRBkVJxQbED9nSxf9sqsNadx2MEhPT8z83HT9i9U1RNPwhceU2D78JF1L2KXTyou",
  "key14": "3hdjW5fP21wreo9r1S9dWd5EdXqFTWCTyXVXFjcMaYa4Rj5HiU2h6jAzp9Mw8USbRwyvF4NkspWWRKJCzMWFPuxi",
  "key15": "3CPjJcK4KRUJHwZa6AAf36JNuxwPk9h152SfewLHEXy7oYqbdskjexX976WdBxp1nr1srHc4SBnkTKnkWqyu8JTr",
  "key16": "3YGGgTeirs6NUZ46gJ7tt9piB1BMpoCoHjZNwuQRSDMUjkNpXpamHecRAQfmo8uqnkzY1dSDtozKY4jK8DTkqfNw",
  "key17": "3PzMcPnERbZbox1J5UpzxcEDEBKZYAgf6K2oPBf7pi8vduG5XZtSuH35LVyppzCViQqAFT8xaTdQPizY9yH1RUz1",
  "key18": "2XctTGiU17sTx75Y7zq6wGDjWmDbUiQyFJwkxYd3Eh3z4rMn9QywWJhinwLXzaFwWVDTZCbJY9UwqrKGS86i5xQ9",
  "key19": "3rRiQEK82YmPkjAdw2uHEL91RMDoSuSiJyoqJtXawSj3kcA4Yx9TxtHa5JkH4v766vUpwH2JZxhU4Kh5uNjfr541",
  "key20": "4JXqT3EYLEyWiyLj2F2oXmi4rBwuqHBtqHvLQo6NZS1YTArHeB22vYZ9HuQ6dUX7V7HeCdVAg66hw61NM1SXeQza",
  "key21": "eBFVcUHD6Yd7PHWmxq3eFoBD881meaSkKvCpLCHF6GxyQKa94pbAwTNPsLPddLbJM3nbi22qQn3J2zsscpKhUKh",
  "key22": "57QrCbv9MkoRGf2YmE268QceiCGQ61DRps3y42SAPF7K6ji9wUgcJLZRCxBmQh1WgKChmUZ26B3ANfYTit4aitbx",
  "key23": "4iC9wZfuXUGWBMCCf3QTNJ29fjb8xKYUns5YHkXvNhej8teHiJHa59J53e9jVT7EKkSsC6M1dFpVmM4NT7mbeVMu",
  "key24": "UU2PDxYwLPkQfpRuNyA6eT11L6rjnirm2xxxKS3Mg3WAaJva6snnnESvRaTqWMkKhx1FEp64PpcSGm7sr4NHQiu",
  "key25": "4nBET1nPad7UJfjDbJr2RuuHTV2LB3PpT4HPDDDURiv8JDcGJuDvqvY7SpzxmwPTP4c491X1fpYJ5cK3L8dRXXM2",
  "key26": "5zxRrRi68J11bxHuRHvxSrxbdcPafv7j4JSRKXYAyCTVdHnuBQcnXWFdjU5UHH3gVZTdBdobGYP2xTXwhSGRescP",
  "key27": "PjzrmrLt3iactP2JJ5eckXixaSf6MgHjsRwQHYPU5a76kA3UoB17sSEfnXS1JuigHmVVhMnv7BQLBRbicL2JkWX",
  "key28": "2dbLTvfbCbvNsP42ULfGuy9gJagZEVq54kn7PXfTzj1bkirnY3pwpGg4fVVhdcQeJKgFbLBNrjKG9TDUqSXLo7Gn",
  "key29": "4mzGttwsoMGNtHkWTrEaVPTyEA6R5C5r5NgMu5fjC9aPy1nWTLh9NrhoC9D6B6H6S2aEhP6c1X1YuC7VDYgy77BV",
  "key30": "1yTnPUMo2gD6ziSTpVkvnwaKNdZqfxbfh2kzmMjdS9G7wh8bYueG6Et2fMvD6Rhc5EJYX1mw6jkcM6AU8nKPjXG",
  "key31": "39z6tv8C6FsoUHEuL3uQUsLdt4SdrGWHFueW7JYM2Wg6sbCWN7mjcSXG7ZQfNLQ6nufxrRjcLMCVoCBZoPu4xn3v",
  "key32": "2QqepX7LJhVCq58K3hGSgpDX2dwKSo5FTgpFwQWcJDg2xK9AJEKbWo2K3UzY6Tz9TBpcRDUWXvsBYmT6QbyXfCh7",
  "key33": "3p6HDXcQQamrN3JfCPyaSrFFjueahQtxVCFjLoXVQNkc9vqsbsSJ5oFwjSz84XcGhq7cbiR9aCqpcQp7ioc1f3qJ",
  "key34": "2JHocGoyQihxzCDWYkrEEo8Vm8N8u8Y1vkYuh1HQc3Ld6QLTYsNFhXSHVcPTFQdeYMcZFMTac1YR2XxTLw4GnJG9",
  "key35": "3PTrUTQHkp3i5QAVV69cnCqBQPH8Afn3a8dJHrtz85M4i7ABAQawY2nqm29K7d7Bjr6s2E4cx2qST7vZdo7mePpe",
  "key36": "3ngHDPVrh6ZV3QwMHZukbsacWWdsXCpBUJ1JykqQP94YohGRLDa8SVijL5uXZTiY7WPJDHZFWHpWDHdovFzga1M3",
  "key37": "3pYNPLuesK4qSQxH5sGEN3GAc6YaSicyCvbrUbhqUe74LakCkgCvz6gUDmdND5YUG95cB8dNqoNm7ts2YiwbDFb9",
  "key38": "g3W2mcJfkffDGEtbvTuvPvs9GpMUzTDNZk5KSDVamdxZg2fCBX8yAcjd8fABVi4wdmXo7baEW7o89evesLpkk93",
  "key39": "4nbxVqEyCEfTa3zP9YHuWFDQ8JsiGnNzNHbKotxA1kdZiEUzEUF26tbmCne3ezbHWov2G7CDkBnx8jyAssbMmp28",
  "key40": "5yozhY8pEhaNkB74jrJv37eTPseG7dZ2QFDPAT8PBCuc69duZz3rLPtmZxYBzSs3CkBom8rzMC4oxEgDvMfdi6Rd",
  "key41": "2ZDcR5Fs2swsdE8jagtecgjLQGUCDZ8yHEQrBsMtDho8DwL1FnYuMmcAEDnvEZkmKkg7zfWp5kt9z3Js1QzFA3RW",
  "key42": "JZkLd6r6555iBL8TnaFqMEAfdAHVLsWn3WejBMq3fPdsZWL6Ch5PsLj6ZAjKYNwoEhnoogUbzypxE3Z5TZogizv",
  "key43": "2jVSChMXCyxx4VcW7NDRJxNyi3RtcrCJabdpF6ZoBcFmgrn6D8LRGGFBX5synmmFdC3PXLpHnoqkfXc8uJPqpSPM",
  "key44": "4PJVXxTt9pYgznV84S4tQTajFgTKL6T3BnbzG1CgozisJZsVrxUf2KVP5ZEHA8nBa6rQR15S1sGMMmghbzi5my5M",
  "key45": "32jJDcg8EC9Z4KnxDqSaZvguxMuPf9WHX2U6yUe6DiuwCFg9UFWa26DfiU9yUS5aBQ4JxBD23xcQVCLVb7JZvsqA",
  "key46": "REAyyksoApTAqQffso4biN4byZDEDjgU8SBtNeJpEw1n17ufXcmG5w7SMqhwtFknF5zpbe4PgMzw8vE8Zx1RKMU",
  "key47": "5Ztmuko8BH5K8pzU8HCiYenXGw6FcAAmKR7mqLb1Cf4SuBa9yBjGMRxdiiUXJqj6JemQSVeUFfmCq12e9iUGP7FJ",
  "key48": "pKEbX9fspCtrqMnEhR26eq22dmdaBujnW3f2ZFUcRDFc33GRQgZ2fofcu26SBUun3uqWwRvoVexLezTjpHmpT5U"
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
