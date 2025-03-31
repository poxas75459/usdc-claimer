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
    "5n5J7RmxN1zXS7ABuSbAaWFaAUdpABxspNcSexZg9QdEkVWds71KEWzduRsYsW4YpLHRBgCrZswpRKU9BokEpdA9"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5FJEEjzkswxdJZXNooxhoxjCEYwrF6AfzjeBL1rMpZRLoS4S2x3rQJc5L3aTPuJ8b4fXRXJLUGdbxrHNarNwGgLP",
  "decoyKey1": "2Ke7TDhBN12yFLyEvGvyJcCqGjYfoUxHXY9cY6682xXLYN6ewqJahAcTKtjVs1tfw2RerapVwwNGPpC9etQsvqKZ",
  "decoyKey2": "tpPqgTYCuQcv6SjoAFd1sUdn31BP37nCwifXfFuofjFAkmRUCB6VkXFJazReiVJrkct6XLgoLJ8k64AB6F5wua5",
  "decoyKey3": "2hHar2D1vkFbyTaabFnKcjvMWcuqPswqUQi3ts58cfoKYfYyg7Q3tsBp3woLDXKKpSkFLxZtwBeVZERV5KXKnqKi",
  "decoyKey4": "e7mAa9Rm4GNTjzg5gmXxfen5DgRx8V7kiaztxjEHXzMMUvZcDRZCohVCyuYFLNFFctp7Kxb5qQq698BJ59UYije",
  "decoyKey5": "4suy73UekfntYcJti7CViK8JJEYCbcr1wKhHDN8UgcuvbtXcnw2VSYZP6SAVwBgRA7g3JNyhU5aYg4ANh5qzmz5z",
  "decoyKey6": "2SJ69av1PBekBjRFUWExi4FT3zMPxXmCz79YSLDnMi6jWzX3t8hu6xurY2wmortLVFX1wFmfcB4ejPA92Y5XcY7T",
  "decoyKey7": "pmWim4xZZVpMeedy2jbqSrTd7aVe7T82eZPSH9i2iabZGDsThCkS8PxXXuo8eFAmzGiju1yvTv7cEX9hb9xoQLa",
  "decoyKey8": "2FbwLBXLGDJiD8KsRn26ATbMBnRMThSiwznu4A1KTgqKdR8cDdeGHSoQozDHH7iPzBXduBpaR8PfyJvUMo2pd1sY",
  "decoyKey9": "2ZzNp18BtpEc5P3jaxUtx8VUY2VEbWT9F6hapMGmyPU5RPsA1gSmUws8h8sGXu4oYTdwdFrixEkfj1yf9heBRXJt",
  "decoyKey10": "5gZA3woQPc1xPiDZUZgAduHyffEXZJBAAEPk5jhykBdwhV3dVc86HsDReHs6VaeCBLwhpGe5neRrCvaynKSrkVej",
  "decoyKey11": "2LiwaNdB3Eih4rY5VTAHRpUkhWTG6hA5bQ8uVtn6Ttzs96FnY3Yyixaqk55wBhJJ8nbquF8girPRM5je4B1S1CRK",
  "decoyKey12": "8f4zCpqEtk55NHBvyHwNgbFa5vY6YLpS1rqaQcWjZGXondpAMzSLG19xbjpkVjgfPfBHqVrdvFu4yD25qX861ge",
  "decoyKey13": "3Ht4bFz8WpzVsPzDoN4WFeV35gw32i3bHfzB3HcKaWdBuApud514dyc9GaZvU1y83Af2QFgoo3GAvHHhgAvZPppp",
  "decoyKey14": "yZNb2sPStKhTuaP7rt2N1t21uiz46K613gsSaUci64sUqgfAzHxzRoeXKsYioHuSEGVJifjWGYKB8mFt1mG9k5t",
  "decoyKey15": "4xXsSuikQQeC4S3MQgrrqC3QXHGro6mrzMNo6JhqLp4FqEqytQjwxU33m18V2xD2zS6PFFPqCjS197c1MSippZGg",
  "decoyKey16": "5mEbMAi4DbZxz1jEiDwA9dmzXVq6b2fxdJGVBCoo7NXfQskJMc7fJWfZbFmXWFw9m9suVGwdVNRgLbzxPJxYXPnT",
  "decoyKey17": "5aaFk5pQwakK7B8ANWsYAo83U8YyGLJQGF4SVuhENVWqb2FeB3kqyhaZfjtu7TcYEbL7Pe4i4acHHFQgxL2vEG3D",
  "decoyKey18": "65guDuqVDo5gCcUMjmhJ9AaEiF21beZSzgutxiegpmenjjuPeZMLJgaB9cAAmqEoym2e8cngW823GE3i3dNgSEBf",
  "decoyKey19": "4LcZoktbherPEHVJSdnudeYUUqBgDtCYZ677LW18EmHEX3sm3ojq8ueUfk7W6kA6vbVo488pfnCCbazPUAJda5L5",
  "decoyKey20": "4eNVne7Vy38VcgakNHFgkdTam2QPTUuieSbgtWMfZeUDGs7VijMNe8A3bRVrzQtZ8kd8dPJvSgumsWp8bxYVLJ3i",
  "decoyKey21": "4nJxHzjACPBNRMRMaZNaWDRrfo4vzGsDyoAjeJsdf9DRpqC5tidu2CoQTTSciQzP1xGUbvsNTD8qQdhtfV147etX",
  "decoyKey22": "2P5QPwCqKedwWtBSokFT4LPqtq2fdw9qhu2KVxBH2BTWa6goZDuez8GXxTop61tpARNEiGeDXuMihZzQJsKG31r3",
  "decoyKey23": "5jNSwLmMWBpXXsdqLhF4xmzeGqKsf12LJnn9ZfFdRabpoorswGJJk4RxrRhrW2TRrhNBaTTq29e2CU83PdLpckRa",
  "decoyKey24": "3kvsnrRNdwYsvBpkMBf1CwRAYFhkqGsxA1vWm2BhECtTcfMVVBh26nXDyAtjkQ4C6HwBMkR6GSJ8PgKVo2NSFUPu",
  "decoyKey25": "3Dk1XJR85kbp4kRhTF5DJxsKycntK8qPEkRdvc61GKWa76Z6oAYvD8dvoix68BrsRViXfmGzFxH8SEA7m4E3mAMB",
  "decoyKey26": "5d9qRDmJ2jutMgmqHebrnMxeVjgLoGLoLNLC6Uebiz4rWHNmuVDQy5aMqYsj32qGzpvoJtBuXREPJazsJHAYcLFa",
  "decoyKey27": "44i2QfmwULifcqDmqDNDysBav6J73jHxTJBSBvTNARu38G5czbo79LhCzK7fqnSXAnDUFKnND6ZHyqRPCj1Deb8t",
  "decoyKey28": "34WWiRiz9qetixnj7MkiEdfZoBj4K9iWEM53JHJkgVquQB9dR4tUbwqCaqvon2G3G87wSjDx7RMcENPbDHQarAQk",
  "decoyKey29": "26CEPpsqcWipcPjT5fzi236Woa9a3KTakUbExGfTVGQfzRpTPnwBSH94A5ZNLHmGFdFxjL3siNgN89qiGAWPLLeh",
  "decoyKey30": "4kreMpj9n4c8MJVqHzM8Tf5yZLqa5SgKucP9MmgRs89yXH4ch13ccryTr7mMjtACM3z9nuipdigNsGVQaqHLWrsL",
  "decoyKey31": "2nyXzFTHpYtQdqXFaUGYfWeBWNaTsEJt4bcfkVyPGsLBXwK28qoNUG3RPk1uEwMfXBvHKYUPevH9Sxb4m23pmnqf",
  "decoyKey32": "5FwdzEQ5Vpk2gTzCTbt2TK2e9pj7uixgxpScrq3jBme8VEaAZ6B3kfMLYeAEiqn3hV4YN5nR4npn5D9kXRCSJ8GH",
  "decoyKey33": "57ncUsoSqQUGEcSjEs696q4bhVkjHU5J7Jp81xLwY2o4cEZ9Thtm3UZ8Nap58JnrqVM1Mph4PdrpRwRTFG2qYVcJ",
  "decoyKey34": "4jGdK91ytWcuPZuDBeZU7NMUFSwFq8rhLR2EhueVYeCxsxKrgMnFcuXHJGKx8fJvzi2YFDzmKUXqBk542Ao3sx8f",
  "decoyKey35": "5M6PUbsuSKq3kA3xthxCcdzbKy5dK5MGm1gLhf57Bu1q4Ee7gBgKV83nRRgVhHRLTRbeoPEQdNE8mAfg3ZZD8rvF",
  "decoyKey36": "5rgXh1nu54pjbe4Bq9TDzexqEC4Eu6YCnDywuxYs8xxx6U9zqf3xX5DQA6nav5HZrzD2yaM6mVP5k9VMZPkds4UP",
  "decoyKey37": "4jaPwpyj1cDxDwhrKTV71jAfdaUfzEBLkE3xmnd67deJzJKx2uBa3Usvg712MCtN6tYKo2W2JUS7STs3j8E5AQ21",
  "decoyKey38": "4CMZxbiMHnrfWAAmatv3MtUsnTUyUe5Ttodc2gBhmETjGxxjTpdigrzX5EH2EbLYTKYSCPewt95xW9qTY9RRTVme",
  "decoyKey39": "667c7Fbw7HDRXJuAzJZNknNhkeFpvXU3ixK5haYJ5JPVTFftPpsTrpj3uemqRHvjZgAV9zBmP25YD1JkPvoALZSs",
  "decoyKey40": "2ZcjtoFZ66A5Fy1VDKe1RT99ZwKV9fFBwWeMWG62kw6Qyv7AdC6w74xNPA75o1f5JbNrg936mdaYZRBTQ2tuojhv",
  "decoyKey41": "3CsMFqANpTu6v7rcSsDLmWyh4pVxVx1UX5u6HZkmJZjDe2JSDHPiMYHg3xanFGUCNiGq5qFgaQqTwYdqL3VhiHJA",
  "decoyKey42": "5rF2n35icFLBHwFCxaxcsDRahLRD6WNKWGZdVp9ZhQSaf69ZDcupBVBqeBTKmRxzrcyuFeeNeh3zEhDJZW5cH1zj",
  "decoyKey43": "2q4RNUr5M2giruFvFfpAiw4BdfSUXRTiFtyeT9NZSR5J1vtB8NkjnWjmDzFQ2WPF6NscR3TYaeBdJUqC2xMijt6N",
  "decoyKey44": "4M4hkshVutma2mrQnh4WRAuGWuorksQ7f2eYx75u8tKTFBynp2TCxJRFShVe1UY711HVVtGa8cJ2zqXiChNLAJeM",
  "decoyKey45": "5vexJPbpURa4eRmHh8sG47f9hXSQbeQXW8ad3s2S5o8idnyzHqmg19LJosP6SuqaWBifF6NuFSPAVQrDEDJ186KE",
  "decoyKey46": "3hHhQrcpqKozmcH2QhHCnCmFHprSCaz8WNtaBfGZyofmonZesK2kJCzCnit5bhwiHPAy2eJXr67Hsu71V4R4Srbp",
  "decoyKey47": "oyCAK2Yq3jbMDRnDdGmoezpQisq3Tetojcmy7nyRr4qWT8DR2o2nDWH3ZScXP5PvkELMkHZEknCr3J2BdtJwrEK",
  "decoyKey48": "2iUgekpSsd2W6JYQCkcXG1B9DqR8WFNV1YVctCnGgtH8QvnHTQgXnasJvpUXoUbTMuEvyfUj7nctKK4AyAoCjsmp",
  "decoyKey49": "4ZzRMoXqsxjXVSmoyzj4wpQzTDQH94pnvjFSkF3B1vL6CrRG34y9TB1XV2AEFe1HjjCBHPww2F3PhHY3riQj5rMu"
};
// DECOY_KEYS_END
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