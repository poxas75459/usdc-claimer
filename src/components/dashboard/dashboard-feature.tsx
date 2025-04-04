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
    "5xUrK5PpuMaRWXeoqM1A8VnduK9TYJynjXwiZndZusMBwafZbLgiBUzQ6qXucP4AFMatLTj3za7a9GrwxvczcMzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iTD8ZGAbZmPKva6JQmtLiop7ova3ytoLVAng6SgJJUJJXiFWi7DwbxdvsvVUkKL8rLAYxySNhq7auxkqVTSqLBx",
  "key1": "4rrkVh53QjVrLKLijPK5qt148HTuKpwxxZsF9n2DpdxsL4wmdhKgwPMxAM1cqY66tJ7DWZM7kiqdJqFnWAm1qtdn",
  "key2": "RgP7nTZaYkbYKp7PrnpBW4pGdkWxfYMSubhJC8TovqMmMCbT3SrHxEPXthKwx3L5YC9MZMi6PsBUgLitVBKeVex",
  "key3": "4e7gHMZDYmb5EoFZSeDquPowcaAtwQNjKz6XeLMwkrmA8k5aqYAuuZb29hxbXSwqttPYqFFnfgYaX68PtAgRZt1B",
  "key4": "3QTSz1bDN5gL3f26WCgrHe3YNC2AKUUhiPXFmoKBUNzKmnGyitawfbadpE3eKuw5vuZ4pyL732xHN9abnX6dmwry",
  "key5": "5Wp8gA37QnwgN5DXfwPNe1ah41nuMRQhKgEbtMfKmRod65aDbJXTmsRsgEmM1T8gDmGcDQCvahT3x7fhuXG2GDFU",
  "key6": "oPCrx4MT74VXg3EYSUumHWY8xv8SLi2XhTrHFtD8ZPqrAN1v1bwDusi1ykSN3eHoDpTUVdipcVCckAdyrfUBdhu",
  "key7": "ciQALiQBCLnTGHYXPXtmkRvx7CmejzzrXufZNoym82enA4Dx2SyjiQqS4ttQfQftKehH7EnJAvrTPNjFANSxt7y",
  "key8": "4rDq4zgMcSWmnYq6qvUZvMomLW8oNxWinoCFQxTsuMrNN6i6LGPajDYGt1v7MUu854XuXAUz8fTnu9arFJ3Q5bGo",
  "key9": "3EYKkRvq5vT6mJjNKiP8vRknqF9BzJFpLQnpqbnpiNeyXFZQdco6iNj13E6gdUXACrZ9osfgUpuRoGkEBRN8vkqe",
  "key10": "5zkL3VekBUDCnux6waUKKK91oQam5MwCaw2yw32pe66rKqUMBkTQ8qz7vGZDutemEUZ53UQdJVJmgwpSJeipJS5W",
  "key11": "3RBZT8ro4kZLXzLhxK8CymErhLFfLBstE1Wv9vtRQYGNqhynvwSZ4CsR6N7x7TNKfcx8Eef3shN6Suk9BXafD5hr",
  "key12": "3hFaZJuC8ZvWSjF4VdghPBHL2xTSHrxbtL9axLH9CAFBNVZMJsM7j5Jmt8LyU5ZP5kC5q65rJoQxWy5LAg6A1wJw",
  "key13": "4rdrg8yKD1rtFbuLwxnKLkrsQsLTcJivG7DfyXo9tmdyaLYtKSpjCubr1ZMzQqnGqvrYq8Gr5WHSrCvAT2CinCNf",
  "key14": "4sZ9rghhTxNdoPHue17JZ4hFdjwn6noJ9YdfDhn8V1YscW7xZjVdSvPuZZpWfa6htXmTGVYgZF1QuoJ976Pmk1my",
  "key15": "3xmt2zu1HAZtkaceNBMEeU9yMhwcYJxZVRemm8EuTnVvsJSRGwLTGhSav5o5zgHkhGEotN1ipFdH6XqW6dB9jfyn",
  "key16": "4ne4SyNF4Ad1qHN5ba1skLZHN2fmtj16Vz55YiVYHMA7s63Df91wxW55quzRLRAosurrVjPD7ZGP2o7kjcEfzxhL",
  "key17": "5WuTpePy6F5MJeTxpZiwgxM25VLihMewJZeW6xP9W5wCJAXfoYhCFDw8BtjEwz93r5QHANCGKXYn6tXjRk3HZJZd",
  "key18": "BbibRCwU7v64sKx6GYHrWPyruFSTPJL7xSPdasVjFqfAGgBNJJitfrbAj4tcvufbgirxnEi1RBY7Zv3GMAgXYKn",
  "key19": "4EzFc8u1xU2BzHMuoFj8kKPCV24EykH9W2oefpJpwHN49P5Pn1bkpBetBDwKFisrM1QwozVBfLB1US2Gk57wUz6y",
  "key20": "XtUFMyfFPvDMgjeaEn6hamfGCSeoLpaeE358qa9fXUeH4JZKXVsjk4wLE7G2cFdrwbmSsiLe7SJuDDJsRr5Ke82",
  "key21": "48sq8vxmcfMiWtT5KGHug1Nsnh2chwcRACNkM2cQ8hLW9PuuuQXA9ByCa6fkjfxgemphwkgVkBbapCQbAkSzs4Jb",
  "key22": "2BG6xVT1WQ7waZjXtLEqEu37EBz6LacYdcRwqjg8ngApfMBx9irmix7PG8n92cmGoh22Af3nDSD63N4mWMLGje9J",
  "key23": "44dc4gDAMCcfaMJ2KhnZCY2DLsfPa7dRokuhftpFiBccBjvDBy9akH1Jr9MpCKBb5pCyG8jAnoKJrTjuxmcmk94T",
  "key24": "5FRW85mnpLgNcWFW9hnSAPNhoT7oUEJ4HwMH6rcJqS1RBwJfxCEV95GCpgtrF2cxM7foUERKgQDVsF4ksTcithci",
  "key25": "4V2Mw28gxohNiXWbb4qNnMBRo5NGFv9TSaxMyzLZj41dVTGYziGShjcGBs9gReLBcobmgNxiUsHcNFAAjgBdrEqv",
  "key26": "4fGgyGHanmK5NUSAGwFvgqsmWC1snmq5jRQLm4p5yU4VWLAWYp7tXGcdNiS9wP7VBpj77HbhN4XdoXfdh27LLtz8",
  "key27": "6364jvGxmMTSeDjNyRqT1RGXrWwZPipt8VgFCyvSrVSTFndkA61aRKr9TevaddA9emEYMdPZ3jWN45Ywcsnu725X"
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
