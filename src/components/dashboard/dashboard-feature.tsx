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
    "1amVWdw3wgk8qqdE95uzZtpkMN6MifrXQa2f1aHq2oUADGziw92WrrjB4r2TJddxKsdijXyueabsMf8Ezp9wS2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "567Coe62UVdyNSHRDwhxNwb4h23V4Z9yvFmVWDViPNDQrtUTCX1pzbQ8VjmeMHTsbJAvh1kuCVnRbiNzfhY1Vze",
  "key1": "4AZMgxKqjEnDj1JV798KbArUpxXycssxd2XgRr64pdXjqQn9wE2YTb8WFaa3gd1eHMbHQkdxbg2tpfqinDWDBa57",
  "key2": "KKVHTzBWCYTRqT22CU4Ksf7BLqUSBwb9NWSmffDuKhikTTyTfzrrTuAfg2SrzyTyFTBqGHK6CqQAkn2LrYkeZRB",
  "key3": "4KfYzsvfeAHbx9YFtWwxoBDaYFZBV3aJrxp462hM7bdm19LAvY4EV5fNuSvQ9UZkJXSWXGvsV89AzMKVtXWBQFjX",
  "key4": "2EsReQik7Lhag5P3CCk8dVdptLZzstmWemqQdN6Caf2me4DZTrhqUSq4gz4n5rsdSEFoZvyB3vcmYFpTmKvv7HFV",
  "key5": "57tbi7AtBc53XZuAk6LA1KRpdaA4Qw7FtGVcezk4SeNGKq1PZ6W11McgztmhD2tjiAeE2HWw1ZFByPsKUPmXPhoG",
  "key6": "55XZZfMYFnHL8CrAmYzWQXwHgAtooyMxvcvFAtVP6Bh3iizhG1CEPyfmGt7oAMe6kTo8bNLepmpwH1U4VDAbeZK1",
  "key7": "2Ug3uqcJQSuEbUWDwqfdyozLhC1bhMtovYZa5qav9UcTwo39bB6743wwFw2MLuPQfCLAkcVZibJWttKfFQDMgEmj",
  "key8": "3Nb2JSt69nTjoX2A71mWwwp1Twtwzdsu7o4z5E94oMTDbybPff7b6tE21SGFBVxwsyaKgkofQwgscR1xmpyCsPbx",
  "key9": "2nwXfXMZWvHoKMfjX8SUcKV1UPdz6TwZSPfa8u5MZdquZy2iUqn2VPMvENvFqhwNBx9KoJBFQbJwfexDBVygkSTk",
  "key10": "23sotBorPxZxGx6qch3KicKpsdmT3XtGCHXncsGy5SaDsvAmiGxcE2ZnRePGwhC1dUpByhjpjsskxr7b4gLeaD2R",
  "key11": "2rTGqcUaMgKvyfhFtBy2R43FJLfGkxBBgSB9Uy2nCVtQHgaDfToSs3DKMJpjCkLPqT5qfpcQk222dzp1yXgaLcTd",
  "key12": "uDk7987XtMLDcAB1qtqBZACWvD4o1tKTYRm7KcmNhj8v95y8QDYEKVSqkVkrffmqnZBiaN1mWfeLb72gDtec5yw",
  "key13": "66HKCYyBRY5oTUXDyD1grNYhyNTJXXPE429TiH6t8zn9qV9uDb9eE655MngEnMzrU6c84ebFsZ1YTpvQdKefHPAj",
  "key14": "K76AdAyVtgnptowG2wgwaNFqWuRVfiKvHNVuTrF5ANPWciqsKiYHyF7KKib6pmCc1shaMWhKem6JitHtKZ4caxH",
  "key15": "DBVW1naAHD5pZpd5W2B2HADs1tSj4MrYRRdoK8LRbGGGT48BZEraVNjgVL9mC67cr8F3cnmJxq5zyM7TqisR2Ap",
  "key16": "5STDD3DZCNGFaXA4EWfiAxG2CfF4JiQWjxo4wh1fnasS9uhAYrn1NNmWeh4NifDTJouksq3abqioXGG4ibW2SAVo",
  "key17": "2G8ePUcJHiq5HXQRZ3QNY87ZXL61KMDfEWm9mJken1sw63MrNoH9jV4E41uLVrCm1L9VdpPXTP7fWf7r3ucmhrtC",
  "key18": "3QKpiBuEVu6zv8iC71L6iKbxRwoRcgEkoGYj17GGW7HEXKaN8HfLs3YuP9Pf34AogxTjCH2oHeVRYz8wF8ZmbZmr",
  "key19": "3nzpUsE8imwZq6goT6zJzyW84MvkEW9LoKD5hTyi8exTx1ELcbinS91JkDyHAtcYHVPD8ZufAHQ4GZb3ST6ZVzAs",
  "key20": "yWMyZi46GdVbC9Fn3VJ9ETQCVQ1sjHtEKkawKYF6rRnCZFhB3tQ8Gisi5EcMbdt2X58BMoaxUyEDfUGr6M8S4kV",
  "key21": "23ubfWLo7FcBGsWC2n5jPHkahuMag5ocZcs2y1pVWJNiQ6WN7UwU19JoX3F4VyXXngXUBcgHAR1BnUYywuekyMek",
  "key22": "51Nt8iLZ51b3nYaMan41P78Bj3yjg9JNKupWPUYuCHV197tnaPwBtbcb7JbFtiJJ5eLEeKFQZt9tgRs66qLEwjkS",
  "key23": "2y3YTq2pCuf94JPCQiR6qtjs2J1ium79gC7tifdroRQr4iZnPURK2LHiPg77tsDuuhL7GrpnZ1aJmKShUopJ2Pb6",
  "key24": "4SEi48pj9CygZaDwrKMHhjTr4mu2fad89CmHZ9Q4xwWBaaC4k67jjqJbcJgCiRSB1J9vSVinEy1CodFURpdHDUcP",
  "key25": "2wr4RfYMgykAfCcasfcHNPFKE7Scdc7wvnPxSadjm2bqDczJwdUoJUuqEU82AGdTFR3WAfqoTADNg8HsBBkYBgDJ"
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
