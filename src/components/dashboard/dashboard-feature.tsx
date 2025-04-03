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
    "2kGodTm9nmPVpoR1AbdCikKxNvc6peZX4RKpBezmNXNTLuCXERkgSQnLDcV7HaniESdNNGNTb1d8BeggcMYj1uFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bEpH8CxiUU49xCwPvToEqWhF4htsFTKvxJVneYDVCnJL7rZttDmv2nPx1r8Q3HbybxoXVHCAEkfPLHmA5JZucLx",
  "key1": "48qui5otYQvwjP4neksLjakYr1e6usGoBPq6ngzKFuFkkhEFKUYWqgzBDwPeHyTS9vBwFHAPWom2zbDiBoHkcayt",
  "key2": "4uKA2EsZp3zcs4WrytKTqSAZCGwvg8Q9ds5KGQynToGT9VHrkyU7Dw8NMs4FoqGcKcbpkxbWKnTGLerSt9xdkDiM",
  "key3": "4sxu6cvNTkwokNiXmjaWPHWWbooitp8k3Qx4N8M2DpYbNF2H28Fs9JsDFZbHMbd9Geuz7bEsuLNWkuBgBFj7UbX9",
  "key4": "4JFPVjxa1MYBsPRtvCPX3ZRqVPHHjT77DLD2tXgApBUoTJzVxyVnYjjfDh83FGT6p5LSFHmHP5aTEJ8MrTuCcriR",
  "key5": "63yi1bMtxqe1rQQ1URDXYFHYgByof4szDciYmnXE5MkyovBccXZuPQKrhDPxKkK8pDdmfAPkUSRo2zzgfCD3QFuk",
  "key6": "3HtsmTmoHm5ojPRFRhw2vh8Nghr2xBgPeF8Zc2pQqHiQKYZkPKqDb6MR52Hum2oXqdnMFWTFDVKu7eCjLrdMaaF2",
  "key7": "UHeXd5kt5VAwHz33ww49P6kHcKNA3Xh4eZK7124uA9oAhjxJhbmQJbsFCNxTdPQBwuAmjXa2pgxRpCbnycwCKBx",
  "key8": "4fGtGKS7MrCUAD4xkPkezq2z6Yh8byJ5KZ7U2S4wTosU7AHtP32ZXG8EGt16UbBXkuhA3dcNoGKYAB8oLejxeJvN",
  "key9": "5KGo9BN3qjkKBoGo3oMzmNfJ5VMR2ZoggMkP49NQBSNFqtbFs2NdUGHh8FV9kuAn2NhwWj62X6nsAJcgfTwr9jHv",
  "key10": "3mbkBqSECbYNZXTXEJ1zZThadRa14w8KJBas4QRmhPLefvLMDM7qQAu9fTJUzYQq9NC9EwdWETrGwjNfoSevDQKr",
  "key11": "4G9QjfyhQaLkEuknz8Vwejhc2Ebbbx8SzR7xNo1bubcsQixPc8sAms7AYKQu7WyCGFevaYjZ8L8EP9A5upN9pmad",
  "key12": "3rZMz8zJubRdr8dnF46XyQjWbX3Yo4RUh58E27VmH2goUGnbKdNmuGNZLktgM3ncAHGoWbVBp1k4uJLpTrpi9ZLa",
  "key13": "4cFpFtAvaa3Sq8Wfog3D3em1fpoPQEQytingwcA64gif4VSzQndNXw4FR4Xi6DzZzMytMT7LoncHwFL3FusNyWSx",
  "key14": "4JxgT3xBzazidVVRNnmdk4VCmYahrH2HJz7AAad8zSXBvmDV9MJ8q2eZJm6DRdUj9tJAxaDFM7rFBRZY5k6nZQvC",
  "key15": "rMGkUffvxDsCmWcWQ5BHDoGowHUQnwWQJ4B3kFSkNU6L1DNgZ4NpsBe2kETUC9ozArfXeMqZWj7QNPnH6Gzq2J8",
  "key16": "4oZsoxzmpghp9wyPWfqycTy8YfrAk1dW6Rtw33zHBb4jguzFirKXUTqJptKcPXaR7Lobxh8qAfsCQuW7tgzdaPvh",
  "key17": "56M5NQrwUGgsmRzYCyjZpMaALDeFXpME1cTtJ271x3vxeFxn4VuBuSEqV91DZRjpr7h5KoSRHZUwnfdSwbcoUoGz",
  "key18": "4fxj36R9fzBecs6VD6gCve1rsG6C8mCidHDmKbuQdLvbHu1YZhWng4pBaJeaL5d72y6qs6AXtUdp91mF2GKj4bNH",
  "key19": "2YWYJNpUHPZL2C54eWcV88kVBEgJhsh28dhZvz4DorbVP6uVuiV4ZrFZC2n9UorjbiJokzE5pkic3i9Q85bKQWVF",
  "key20": "3wjuEtvTPHYDJESWMJSsnseiysbLk2FCFUJR7pSF5ktKpvhUL2eL4ixDQhJD4S1UYS4BE22VJmvD9txZ3mjCJp2z",
  "key21": "35cKqG97LTdjZ37rijhwG8J42J81ugEhwnekeAURZRzrTK79WFeTF66yvqc7XMDFxqYoozhAuBJpdgBh9j5QvqR4",
  "key22": "4KhGeZTFPwFSP1wwhgpwNNwJ9dyrT1iGNXsTQEYfRsZYRLijjyHVoPjwmSFGKq76LXqViuGxwFGPMm8NEdCTBmaH",
  "key23": "5opw5G5Df5APmjU9XPCXJTPjpNqXeiBHwGe7E7YYhBcBu2MmMtr4xbR2agXTY12JZ8pTny18XR2Vm44G6nTSA6Ue",
  "key24": "4BKNnLJJSmiwMNfZ3CA9dv7VesSEQcuLTKE2fD9iDtvDL41ZnQXiwDcpQoRkzd9KFh8PytmMuUak46KaqgLDyahG",
  "key25": "54bJemkDqmPy3TFqHvXJerxPAtESYwKPemPHYatF6Y5nA4nvSFoPHghZWdBFuGSzd78rWWHEQxV3pMpJA3sfFwg2",
  "key26": "3JPcTf511Mu6DrygjA5w3sLqiypW8FAEhrHhrQ5fNErA6C2hKbGq851KMLXofKLzKYfa3zwKkxobH1XcmdeffBMQ",
  "key27": "2CSDfbWki4ABQKq4stpUCqYnCLsas4qMKuqNh6FPSJuSnWdTBZjqzEEw1Vv4uS9c97grFuvAou76WpgGUZj77SF",
  "key28": "ZqTvNGyyt6apKYpb7XG5xzVB6sMTDHx6DEk4ZcAHKoRdr7xcV3mzjDP2T4mYRTPFpxpNmbeW9uA1RpzgZ2yURDo",
  "key29": "38hfeAkERGUJfTYKNP9Lpmik8WjqEE9vHErLanbgmxAfaXm1uYsEDhuLTf5R9oagFriTvKFhtPaW5YPFnuEyvHd9"
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
