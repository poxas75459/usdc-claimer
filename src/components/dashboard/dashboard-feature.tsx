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
    "42XjPJ8rBjT4A86UQMTZ9iKJBQxBSnoA1eYVrz3Zo17218EvyDHS1NkBAEV99SNPCbVgHxrWTDxQjrEQgAuMPdtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pGw4taDTSg8k1bgeZikoFUzbVcJdsbJ9CKsZnyJAXVDQg88vS4sHVm3XXDBiY2Qs5X3GARUF8HkRgEaGEeoyZZn",
  "key1": "4REiqiTNnoFWFmmix1bcpqLHSxsRG3oEsaDNeQk9uKmcRWT4EEUxk2TEmWBp1ouyGnrwnXPM29Wt14u6iJ9Fd7xA",
  "key2": "2DEPf5q2pyKtnQqUXSbyrkjTLWefhkfGL52UvfNFFNBX3sx1nbrBPyhXeXY84RZVmxEJxGpTTRJZ6bYMHs3ajznE",
  "key3": "3RpNvJUTuUBfzbXoK4VHSNapyHHUM7StZEKLfgVFWZ6BdFNGuZHN9NLRgDcmhr3fusK8oS3QvKTev95GsGVaXdxG",
  "key4": "4pmFGBnpVw8AurjmDtPevuezgA7Cr16C19bVhbXq2RaU2SacZUp9oHSAYbeC3hFbvzdw3NrMPBQBkK6y6nQNdL2D",
  "key5": "5iezqGmCHEQDTcTDnsY7c1iLVPayAfS8VTedtMTVegbve2o7U55LUhv5ofw9MsCJjMUYFM4EbhTmuDVus5EyNdEM",
  "key6": "3fZVxwhpJ6rCA7AZRtjFNeDXkEKe2mTTRY2HySLhA7fete3ZHQ1wHbtg63UUdxkCrpXpyqSSFnMfeQfhrv9vnjyp",
  "key7": "DWhd4EnKb5rfHxcamkKupPVRwJVswd2RGfXR11ja4M5FuMDsrWYZdJazitgWYnDNLauRVVn3M4RpH5veSpnJxw2",
  "key8": "3vG1s7qfCifT83SvyVvEu7EgxoQgXrVPPzP3Tqs53yAPc8MDfqF9VU3TBFwSiuasWUXis3LD75kHmexv4xQCLj3U",
  "key9": "3FgLvkatBibs9AKELh4AK8w81LhwN1zNrS4X5mSceivqXgBAUwXiTdVFiRwuf7YWBtKPbin4AD4zNDYsGoZp2rZG",
  "key10": "3KeDboNpaGKjNeNNeUMyXgUnNDu3L429Fc89dzkCEQab1SSsWPiGeBxi8N3PGqG22t35sPyRYRdkWWm7LYh8kkAh",
  "key11": "41eKtvEFqchZS2KzR4ybthdjWDEFyD2PtctFWP6KePM4VER2GHJzU52d4aG5v4gewH3wguTHPNpNKvwGegzexYHc",
  "key12": "4miwE4su71saj6LCdD8pq7pEs2mT6RRUKhCJZioiYCFu1MfMFiq4z3LZX45QjVYztHFE7AMN6vt2ccSbCjDn9FRG",
  "key13": "2EujWRBcmPdiWnjHRVwe7eRXt7qWzsAAUFECfz2ZkivMKEZAKeKYDRjPZbGarVx1ZRV5yDXFfVZsub3ecADTLfEP",
  "key14": "3iVFmVF6G14t5bYPFqjbsRUsihkwuWjo4c6DiZg4PY2nXFVFss14zAYHa4nCDonkHuHPT8oPZo8yTdpXsHmyS92k",
  "key15": "4FkNJ6HdwkUzNthB9JHjiB1JfWiVokL7sTZFrtc9uuoByjb1jSzpRV6KqwGrXo2gMtUddspwAgYREAA7HSN8kfoE",
  "key16": "3tHhiDCQV71u8B6PbAm7owKNptCFa8SUVEEBE9veBP2ZsM8g3B28utVAiiZQLf2SxZKPCN6bdToSKTxksBasmc6J",
  "key17": "3X6hsudKo2RJUwuaztoqCrAkGQM5vBkKrc6DUBckCF6UYSyPrpWG3hQNSnaPEbgy94r4iCVjY4W6DYMEF8hQ3FNz",
  "key18": "4bT3Yeh8bPUyoEifijcvGvTUeBzgfhqAxEkafGn8ri9mdCWeo2kSV6om4pk9MuK3aKhoKNtBME2maXRTp3ZMT19V",
  "key19": "shdPfPYMDa648tJuBakGuPjqxkHZmiVQ2XKCS5FfAB8DxEfi1C5rG3NKZ9pvhyuxGnr1unnL7Rvan635NLGyv8S",
  "key20": "5oAryVF433NN5hm2qATrmktbhnHApip49DGBvtbMuB31tCB3oT8nGeqdft8SubNin44NBoefZonH43dMjsLprmpB",
  "key21": "4nRzHxAPbzUZAENtNdfBeCpdKmQ497BYS4pM4xTgvdetmzL8a5B4W6ZP4rrJHyZ6THvUShJrAm7DDjUygbke2Ws",
  "key22": "3JYYeVRnbB1icPVaSKoSriWLqjU5j1wXPD8Gc6Sk8K2gJD26xzpdBmphPnVqDwdSWHXErQa2h1PCn7E149Z6TKC6",
  "key23": "23EZmyk62r7NCGuNvWNnnGh4qF6jfER3p4WtBczwcitQZuFu2Wp8eNBEHZN8GHjTaKgBsMjSJcsXoeJLtmL6uWdm",
  "key24": "3HUEHJhcmdvXpwurWhjbRbGBgUgmrqrkBGUugd4s48PUoy5ezwRwcF9cxkVh44LWAZXFUyDadu8P19TSTQ7465Wd",
  "key25": "s8a93gaXQiuSnG3hYzyUpF38tQQkQjhTf5vSvGSuL3DygkUVmppM5AwNJaRNVw9uCfw7B7LTnXyheHfHaqmCY3n",
  "key26": "szs5DWLACyefPPrcHsLL9StE5jR8BAEDcQKCZJH8vTWkPk87ZHz7oi4GYNWeMBEDinDvVyzg6cH9jeBc4XzRNEw",
  "key27": "64npdhy6RJNbmzcwnHb7dXpTgzMF9t6CgDxAc4fJDbRdsZAfigHvnQz7rGcxcT69Q1nrBDLyQBcu4S4nGWnFTzCG",
  "key28": "5hiGaokosPSuzQvVEktoDmMRtkf14DABRfKvAAUtW1K1W4HLyF16yEKnPfhrLfhLdZXa5UCGbTU9mxWRPs3TAcXe",
  "key29": "2taTyGh7xDp1uRi8ZZ1FamSLnjQAvciiteb96oZG4ktaDghZTmFV5KF9zu5vLK3RvdxZ1UpBWuVGU1b12snwZpGm",
  "key30": "5qd1UoNTpcb2GxaRTyYDRHZmNnRApXhfxPRC6UvzKG4eJuSfBs5Nc9Cd4v5kb8JNRK6z16DVksYkdRz4eYjLypaA",
  "key31": "2yDAttMjG4SrQosK8NbXS7gCbDfgo2Rd9tA1voPezUFGAMSfE1ThcyRukCU5rcC8yeUWMxrhR51WqPPq2G8xQucP",
  "key32": "c77UwzFsaJViyxN5J796WumKhBa3E11QxL6pQFYTfmkxYsB3epvt38GT76SqJthn6Nh4qBUEziMRcPm8ppeb7Qa",
  "key33": "nao11v7G72kc1NbeA2UDpbyqemmXryTYgFYRUaTLiLEfy9ZvfC5anUxDurDHQFiMWGi2s9yX6QsmnfgZL64RyZ8",
  "key34": "2bBCXFtDNz5Pt6YEcnsnoz52DihEqzE9ZRf1TtUPBVhfb91HwhRpEbS5h681dpPFk3o5m6KFTmZHv6kSdwvBFa2p"
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
