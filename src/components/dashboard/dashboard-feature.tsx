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
    "5CFeLXMyh65WeBumsEz8Ep7EqZSqTwBL9wKujWFjwLtcxCzr3GjWQLc72u6eVXZkxkUm673J87xvzD1WZLUspVbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5moBtDJm1C5XrV3kx1w4rYVaqEmYWuc4jvaemwCMY9YNehHzSdowyLbzevBfDeH2424uyweDrLhWmQY274RCz29G",
  "key1": "4rkXMsTf8uzAFy6ieorJ7jHiwLpS7RE5hussTxri76ipehqz7hYg3nJqBFHxTs3oTCMdNT7mxJDex4J9kVxwRBUz",
  "key2": "4FtjAJHkfFRRTKbJDhFNCVZPk4z5j8YG5g3gZaWpp6matHKXJU7b4wd5Vtps4B719J9MSBNKjQ1hvLzRVHVvCduZ",
  "key3": "5gW2dxgZANBjeGj2vmhL9zKjKMTK2ahRkkXYKfVfhthxkfFjf7UfDNo8Z9cwxcD224ALWkZwCfSEmL4vrgVVuCFK",
  "key4": "2TWcgF5j1ktFkRXobp8wvhzt7BTxhCZtagPG7jyP4ooSJnuZY1twen6Pa4S2RZw7zcaJyvis1UKy4zfp7FsBEFYu",
  "key5": "5WWtNMYy7iEXDHpv4U4ppBf51TFHEatftQ5RsifRyqU2RfuciwAmi3RFQp6VNWSqDzdMxmMheHXU7qiDtr3D7kz4",
  "key6": "3T54o4pPqiPgy7x4vVctsaxVYtrEgagRYd93hdRbKHVPqoEhdjzNwM81rBiQ7fuZhcLqxd2gXK3DjCXCFmm4AACN",
  "key7": "3xMK7xHyGqos1G55Hmb6Dd2hcvFcbEdybBFYTXLLFWwTzwDFHz2LxHUDBS8h7pW9Nzft3DFrjQ3C7MuoUY36jqFT",
  "key8": "8ADkyaL1RLcoUfv9HxNhbPMh68Eer7kdJ69v1iyhyFRhDVTbUAjw4qYrpMPf98hecU2isyKTXJ3nc9ZfJCcQsxg",
  "key9": "5xhjFNMgAuWt35ZXU86WurfRB99DiU3ka6y6yMorcKmJGbH4A8qAopLUTsyJpmhEmxAmT3aXgYFcBnpNoQ2qpgAG",
  "key10": "5Mo4i4nG5Wj98vrvbdoSPiuka9hVhzGtmNxUiUPYpS1sDNQMMG24RD6y9mnfxESz8bNooYAhXK7dfB5bhpegjfrb",
  "key11": "cYL8VLcvdqfGgsoGyspzqNza6HWjYoPhmUgQhsVZUiEn5H1FMS2CBMhzgtrhDDQDzLJcNgMH8WFZG4nE9X1La27",
  "key12": "3oETtENAc8X5UyAZvVWH5qc61gCMLJguYMr3FtdKs2KntB4WrV1pH6Vbrkx2vjT1yuvKpKFC9gBFDiE8GZFpqk8E",
  "key13": "gr4MxWCBi1zjUHh18JnWoQgwG58mBt5biktUf5fMsdgV3VSiszVU31gtokdpNFMPT4XJujhecCBKJDdtZcdn4yA",
  "key14": "24t6pv1aYRCQvy4MgZ3scP9cHQTH3GUtkeMGCrsKsA1BAusYnALejSRDoMp15yPt1aBTCaYkDgp1PhzhgCZEWz91",
  "key15": "3DNLrTXxaxEg9rtTtPbpHfqNWnvXAHneriATa1mx1oKFGLJpJWsoyMAyJ5Sfbu3TKpmQ14piL2NtJpJXUF384jtz",
  "key16": "UwoCLe85zLKDyUu57HiebDtM7Mgw9tBJCTNrTicrjtzMhKmowsRTEESRwRoqEi2Ljru4iuPDokQ3G3s4AuBstov",
  "key17": "ARN35V8D3pRRCoGxAkPDhV5xRc2aqr6K46xu5YieJMCBqFnVzh4eAv3sdrPZywKEHUR7RnHQqSUCj8bUUoqiMyD",
  "key18": "3t657fzRKyXZECUePGdSZ9rRvkgZoweWDzexhphZjv8BFdzdo69LpLeaygDN9Gn3VWrFkr5weQsawW7SyAgjP1Td",
  "key19": "295Lp2EMmZfAEYJ2cZq8v9aov7HBux4Ep7w9zgoPjChVpG7W2FeD5JPzZwFvz46qLQesocgZXJZkxVHA266CFeqo",
  "key20": "4jrMzPnea6juBURqN1V8u4vsTxhFxhp1pv5mEqcKSniF13bg6qk4dW6h92F3QW91V9ch3jKbFNePiHgy3Dce1HMP",
  "key21": "4kFphHUi7qjEWwPwLY6zaaeKBFAdzdL3nQHcqRNehZL11dqEi9dXear1W91w9qz6cBuhUjXNR4SgcqbniLtBSw5v",
  "key22": "2Y6rQ3CKjLXbe113M45Rt7LpLFmXjbdwpqedYAZJNUzxKjw6oAyvVqSEusRBaeobrY4UaQFa9G4Dnx5ZXGXRTZaX",
  "key23": "2g6XJUQ7jpq6bsHX3QuEFHHsrFPrDXcyCPuXovruwovhUavtZA5VmpVfuTNxwmCm3AFiyJuCaYoi8dFU6kUo2N6Q",
  "key24": "5GSYJTVVXE4jgU9srTtYtofM2oMMTdAcc2oB9ysUHy54iojTrPXMvps7Jg2XguWrViPUsUEwQwyQzaahuzeThs7h",
  "key25": "5z3dw8GAAMymumVwTifPQ7HNrBCTqifSXopWWP6uNgTNKWXo7fUfFgjdZm2s5yNna3CrKEJk8eLndQrWeanFU9UE",
  "key26": "56QJ9BXmgWCJaWduXWkC1zR2tbByAdHSJ52xhtXSSmehhSeKjioarT58ymU8K2EkEBgYBnW5H5xvLx2dTUPK2wTu",
  "key27": "9GEuTFASUSojwxpXvSMz5NWLQmowS5E2Pjj8wKZiUCUbU6gj6TcL7LsznQ2porqAXcYm6PRWU3cgTEKuwCronZg",
  "key28": "4zBvSsshat3B6oxYTpLJ85XGz25WsBD3Lk9NvBaScD5mC2CewCNvC22ex1q9jcTYannNctUQovVqJwq63qSdqbXW",
  "key29": "2h1CaafoT7UispNvLfhEV6Z1TdnMhKuNmhGGnuTzGTv5EHNp2fbBD8fNd7ELZ4jTw1w6WaU8wXM3KRa6eKGVMzc6",
  "key30": "4tUmRciJHr5aiJmfmi1rKgjzGRZ39qBqCShQx89bvFdiWK6GkmJvuCZUepNF6GJmaZY5Xu5xM5PP8kfmg3AKzYcv",
  "key31": "FpPo1EaLzZ8vEaDWSeKWrY6sKKaBijcF3A7PLM7Va8gpRYaLSS9CRZtgCHzWC8pcqckaXp5jxKRcmmBWgj3XeL5",
  "key32": "3Qd8awQieQ2g1JH7Y2XTvXfU2hnxqSSJG12p1a1taMYbDNceN5mtv8kd3wrAaep7JMd7jQqENNPxFMsRK7SHssTe",
  "key33": "4Gvg7Ye89CVsxiFYYBPyMFgNSA73nDFEvuw7Ux3g4yaCcCHgUoyLNb9uBSqnQUNBWJavNo1rgzSzw6HtUhjqnPwN",
  "key34": "3FVXr9Cbjebrz7rao5tyHLWek5R9LRzsGqsPat6pBR9qyohna6TNpnu52QFZX4bonjpmzwh1xzUEMYuMbV4SUQxc",
  "key35": "29pNUAhcrSTPHcRnebpXoYbHWACQE5KdcpXABwJxukwFKqaqh3oX4MoSZrTCjE3yzcqSdKpnwK2wyz5UzNMtam2M",
  "key36": "5TK8kZDanGmiHVd3oEgr27G2ohsePCGgkQLZ8L4H2rcs5YPqXYvGXHJBSmmW1xmHke1bjWgjQrMk9rvjQj9WHYFF",
  "key37": "CssgKtSc4p1Byviojx3mqvpP12Au1jG5V2fWRuG93u2tgbQTGpuBHGbL5RcDCBssUxdBKc4v4n8Qg1skTST6P3x",
  "key38": "44XP7Y1qS7jP4fDqjs62R2AjhRFUJNiHFrmXZ18fTftoC2V8ntXseo7vxqtwMAM7fzWL1U43j4qrhYTNjJ8imasf",
  "key39": "5456ftJGHpcsewqZjHUpMKKxxpNCBGTbpsaEo7CamCA1jto8SEgbSR9ezjhAFbdfLaUq7yFJ9Ay5LPJ4FVF6ncWQ",
  "key40": "267krRkGtKvF6ANFY7qPZ221pgzFPr3x7gEPNBB5bTUnRSUiif5DcFFDiMacDEtQSinAU1LijTmEdVRYKoGMGyXG",
  "key41": "2Nf1YWixZLYz2a838TbfREwH3CEssdv8nYeYH4MU2VieyLGHQhtAKoDNeBzf5seCApT48bKNzqPugE2ss9p1KjRA",
  "key42": "5AQBouVZPcxSipq95HPQiUyVBXWwEkoJarHsawR7oquHUH9828RQHoidm8nRsF4sLHWLDcRyAzoUHibMZQdjNBTb",
  "key43": "4xq7FgsznQQfGcKRSeaBNw7FXjiNcvu7WBmf38wAW8E1HBeKvha8uLnNewmL5hCzUBf1GqiWXrNccxY1wX8YGAf4",
  "key44": "2AaFhnxKw6gdhSm8aGubvbmXcnPLsybx8RVHKShreoVa3pUwnT1GzxE5yxDkhhShvSvRW2X2FF1dsQWj2E7idBfS",
  "key45": "L87kvnR3vuqEGCgQ51YRnchmV7zz73dYqDYF8QDYHCQXAcLwksaD59AkNwyFFYsH382kppEtigUfdNdcGcdhqr3",
  "key46": "5QQKg7zgxYQvxsTTC922w1aQn2qfRM6ESxPhFfs5qGQZ3Ng9P9kQKoiekHPBbFunukisUaAdUDXXxgKDQXPBvvPZ"
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
