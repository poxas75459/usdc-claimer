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
    "5TVUrPHTYmyc3qsLvun8PFUSpKZTYHjbe7BBjULFY3fSmEkNBJe8DFuvaxpiLvKw9uTbjW4CCRfaafDdbzaeotkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pq71xWfw9b5gqM2q8W62YLtEYBsfMLSXdENYBcMETSV7xJ1eUf9DEpvKrJYKqWkeJp6AMiVMJuyP8hWw4PruGhs",
  "key1": "3sz4YT7VVnJdsAGRoc7ShVhCG53DVmGhTFc8fA5AVLbkkZjNSQrv14433auCTzgYcbs2267GtPqAi1Y1C7XMRqUj",
  "key2": "41P7fHNevBvnsee8grgyfjpju8VS1i7L9Eo7EoXv54BCLBjjwRxsiFhJfBBAG24aNbirsFtAAK54PWTGhnFTDhos",
  "key3": "kfWh7xxQKjLkfmWEK9cuKMdgz6b9HZqiuDvHiU6VxKyCHrRsNSxFoRNwfNJYn3U9KaMaR6rbiX6gSGjbzPy9sDC",
  "key4": "59Hp2EQhvgsoz19rk4b4x8h9HDYUTi3jZPJKdpBb6hea4DJdMVcM2PdZup9VzYaBavkxdzUvffHCj5mkNMCnEfov",
  "key5": "4jSyFucCMJndBzX8jqJ3EBMppYyy8ryR2HqrCc6568C9mgEywpL5mVr1XAttegCXfqU5z5fnfvV9JGcY9bZaDCKX",
  "key6": "nRTqweQH9gr2vRWpAA848n4USZxW5rH8CChrYrKFRnJn8g71NohPW1YuiEbCHm2TidRif4AkDYkN2eQRu8LUx6X",
  "key7": "4vzD59NZQsWGEQ9QoKds8PmV9U5YT2oeUQwkoqLTceMK1iwTtZYmCkCypZ6LfT1mvzYjbL9YinUb2dVFoNbeQXtA",
  "key8": "2tHgFeZ6Ffsn3YFxaLHA9YNhkMynPhu4R6LfAYFKJoSDy77ycv98cyjnsuDBEqzNqKnFBXDVk1A198H78UbFvvtt",
  "key9": "2fZsM5RJ1yaTqyXwkxuNUD7LuHKhwHn26mh5URbmWJtZnNaZnZAUFDqEdZ7jjeqjiRPpne3k35eE7mKRUHLGt8bo",
  "key10": "4MKy3nv4Jb4USEvkauy4szamyT3P9ujaYgW7PREU2ugNUeHbTXY2p9cSabvbb5piyBmwbD4hqU62mSBXAEwpn1Um",
  "key11": "5nF8NiJUdmiTsX2mnXfkcY5fL7iL5ChaofPQKTo9nmSwtbcqHaSb15vv9fW4DdgeJbLQGxwComK71UBNZMx56CAG",
  "key12": "3zAc9fzcU66UdSRzxrvrUcdVqQz4VJg5YjXfDRHY18d6qotE6mhXKcKvQ2DBkHAs61N9c4SGGEXpWqqpSb1Eisc6",
  "key13": "CBSuV7GoxRbBb79TWGkDQJtCogy574ERoBUcoeK5d3hBpm3AS1r53xqUPW6oNKqCVzurhEUXhbRneNUxKzbcjbc",
  "key14": "2EGi6ebyTtg8Dyw8xdMzY3KUXTZjFziGuwdDDSgTq8zVfaY2gNiJZi2nGftLNQkgm1y3vpLSyUDj8B2xgBtT915v",
  "key15": "3L6m63W6XVdSoSbYyWHHpmZPWi4o6hpgU27caMzG8iSZ69Kg58S9fqBrKxH582aJ4vPrN64dnamWuLRAH8pacBnj",
  "key16": "5duStJ7Nqnd2ZXpPuhbEHLBprUHvrHrsJHonVsgeTAbZr5ymX3oPmbe8bTvgiHPCDrPg2o24bTyVNjPPg21WNa5c",
  "key17": "2uqgkgBTZvtvbb3eTRbUk5VgSWa4Xjxwhm4M5FjGuKBogJuP48djGSXxCm19UgNPd6XXeYd8FVt4um5n3yXkTEj9",
  "key18": "2PDKrRxiQ8XG2RxM1zQZ4CgPkwNHA3ubnLxeTcU2k6V676hM5FmfMSen4HMVdjLNvhopQCiJyE3xwCFba8xohvjD",
  "key19": "JZLYF6VesjiL7iwHrPZbVKvo3VxT9SnvPunjRr6BP95KhpmiU689kzFjSMnSJ2o3G4oN9atUvq3LTPjJ5Sq4eei",
  "key20": "3D21yVSiToYcxuwTrNVbyGRD4KdZGBevga412sffbgva2ahxoYeBAttRrKVEpuCwAaEoFysK5kavpjaLLHPfayZK",
  "key21": "3eRFgozdza7tarXSBqCdqvRW4xVN3XpD4Rs1rMXUCn1HVP8HLBUpHJPxnee2vTAEF95jar9JkvqiifSXgZZcLgDa",
  "key22": "j9K84puhHr5FUvAGeuCkcTkePML4C9W489SnsYHrZaXTxfGY7ARqA461t1mD9Xph8YxnFhGF8xMfn4RjkFPuKpD",
  "key23": "2Rde1kQA1WZ92rh9HhAHbWuqPGYeDPgBhfv1HqoSPfC9pBpXQz5kzLQeVrunEXHQ79g4TMburfDiVMGMEXERgxYK",
  "key24": "3oS4Pusyx9ZRTPRzid4ToHZ8pKEqco9eFDb9ckieRherDjVHvXZbotUajxvfGTpp2wEUv4ppfAXm9S8EkS1z6wVB",
  "key25": "ZfqqtXwnhxRLCy4Jyy9ih9Eki3wSjGf6icUXbWfsWVomqQzehwHgy9sEcNUvAuZsNW8SPPkJmhR6NREmuQpyyQC"
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
