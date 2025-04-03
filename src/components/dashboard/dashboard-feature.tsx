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
    "28ga3okWUEg7jCvmEkQyCFL1TicSu742dMwCWFxQiLrq6SzvEwfV1YWJpW8ZmQrTum65onUYBkXtXZVyt23oFab9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AHgQfQ9t1z6KDbawQhBFyehw6NSLRNgmx9ee85pMfbxSk9D1jxw7xv1d2FCep5Ugkn3LVECrbZvRoNNebLZAcKk",
  "key1": "5YXVQGvQgwStifQdDa8pvtb6p29sNSbFPMepmEDC3r1F7nNBqjycS9FQSasGndQE2phYQUmbBpPzu8XgGP8TYxVm",
  "key2": "3Cr6y1CYAMcvmZ4N2N2dTsTY38x1usde35z5FTbJz6PPhH4Wi2Us7CG9k34USmQBP9FqvhCpkAY1Snbz487QuxPJ",
  "key3": "3D8phSy2LXXXVD8GzMu9rxhapusvpcCeP3AUbrS1aah42wM9Xdfp6z63RmFkxzWBGQoM5hnCv5PTWdFnHqMmqyMv",
  "key4": "3pT4Xn8ckz86KFKo3jdf9AQfsgeNrUuBQSkesiXFJwQm7NsUEEcqknjyPxBHdLMQLfrnY5yeVFE4AA5ucbwXQmGE",
  "key5": "4JZU57e9pqsiyTMAFwpWAhiKcS5e6fhVqY8JxJYDtRN66CCQLVoKPmmcomNFf3bN8jBjFRD4pjDzWiPbRdr8Xvoj",
  "key6": "JSNN3YbXDf38zcqEhgxuhPmK9cuGJaUavKywcU76uAZuURYFq8AomaRuD1mDRL471v5Bcmns5MFkGoY2n7CoVy3",
  "key7": "22Tn3s4oDk2WxF2wTAL92nafZa38A9DxzbD4ViUJCJxKRvTHvcvzLFxP3E55RG4VTeop66rYV4G9VRr9oCekj6vA",
  "key8": "K5iQVjbmTPTcZziycXmLejZbtkYv3siDiMTG6HDfFQtMDE2yjU9sx2o8H5kxzJNn3p4oLJbTSqT37My9RkP5Zgz",
  "key9": "51md8vHcxt1ZwWztyDgrHie2zXR3MJW65qzU4MEbh1JZrd4VH92mZiS4aAt7EZjGtTtZMQboaeiQtiG2yVRLP34d",
  "key10": "52i5AsWdzYELaDVwJgk6PJcw7rNa3nHQAQD8vxMAPD3i4LyGEtibRN7yQZJaKGYLb4vvakcUQMHeGueWTc3dUHU2",
  "key11": "38BHDVZwSAQEtsLkQBG73e35pcWULfRxWpY9sbTMvrunSH15iGqq8Cm8a9o2dtoXqViugJywf4ia6FksHi4xg2PT",
  "key12": "2xjPuLRL8fbD5AbLmCnjp46YbQW9T5Z8vcB8AmGEo3Zk4hASyy5RoHscchUr9jPkUmSzpsVoSuqkMnknWVqYKeKg",
  "key13": "RsHEa7HASoYv6fMXxP6CTGmrup3mt5JVo562bK4rRhcnWh164bB9jgb1WkhrnKrn4TRcp387dSZmSXPVR32qpkk",
  "key14": "3xRxpDkA2GD83VNk7nDCtBnU1YKMdE3Wqq5zAEPBvptueapHR7rzHZNUm1xJrhBVx61TnBpMys87ZwYUdigsiN8R",
  "key15": "4EnWZWyrPmTFWeX62JLWQZ5HsDNdGetvCq4WVTaAgHtSHAuNPfJMVt6CakR8vH26MnqDJZyQ834fVSoPvS6A9ayH",
  "key16": "4GyssweYAs43qQq8iVks2eMZ5d1kMcYiw1WyBb2waGP2JERSvdJZtWqKaeLDLNdzsLZkNjC5G3EtoezD6gkSXzFS",
  "key17": "5c1ZzhJEhGXzCFuhD9S4AK1zvNvYmGo5m34VTjw4BCxU3MyNRNHo6QDmf5BHHPDriQvw4HvLXXiCi9Cq9ybM3LRJ",
  "key18": "2HYm27Go8vZBpcboX565aEWxkJwFhQpbdN6yge2QQvNaVArp7WPyWXyeaiWSMw61anWDp4LD4qWGfqcmq1sFfF4c",
  "key19": "s6Z1HMsk5EG1k3PAQEShomqET1vpkFxzbKBrZXTjqEApXCi3xgCBsYJA8RzUJTY7uMREAPHXM1XhF7BQheAyJJ7",
  "key20": "2ftfU4cTi2duNinraQttyHTEVCe9XZDTrHX29769CVNbg5WLt5a36migZNFmKZHqg39YWJgR4QHh7VRYb4i8BXQX",
  "key21": "5j6aLSRFHpSwny7g5e17uttX1s81CagWtgJBYVdDvsVnuKWxv6HFZkzotPoo4r96xQKwzkmXkm9mJutpopU6o595",
  "key22": "2Hszo8WoTAQEN6j8BZQZFeCJD9LRLRW78XBTzyDwWyzorCVNRRFsPbXuzkvzcc6i4Df7Nryrr9jFLkuoWApfmxbU",
  "key23": "2qPCTLa2y95SQFLagoyTVNb2mUAnoUeXYuVtCsKkYKYvdS2HkxznBfBLK3QvFGuM9qTjZ7M1YKv4kVDrjqRDKAZ8",
  "key24": "5F8Xj8uVCaagKYsVMSbMbeUfW87HfBtUtJsxAWykdwUsjosvEXW32VZKJ1c96Fxi5Jg1pBLGkVyxUYTainSPuLYT",
  "key25": "zGDSg53rnDyAswCa6gPvL7Sz81Ye1dwmMukMNkckedffBg8TiC7agVDqzKxkmdyMDyxBhXzX5RTtauoSb965Cxw",
  "key26": "5xCXUaCD9biDEyxyQ27MHjrUixEkAo8SKGeNdLVFuJmtFirieCPj3hBXG6n6RCCN5hdznCiDGMU9LF9K7wekBzPh",
  "key27": "3Mgeri5Jme8nGzRiSr3GcX11q7FxLMAzhojemG7sNVP5gUJyVnKgaeZwQVzsjHptaRVT8pturob84U72SsTPw9aV"
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
