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
    "2JXTDjmFpxW1C9EVarp19f37vy2zh6Em4vPDwtDEoRYzDbpw4VM5hARx91ZCgedTCQ4hhxXG2QcGH55ARagSWL58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55pV1W867FUNVPnKSQQRp564XaHhaShbHb3jtFvKoBY7VTGcMs4YdnN1KG9UqBXqsLZRhpfEyhQBs3Thx9vkaPAm",
  "key1": "4si1XYur77GMUfNtzC6oyjASnvUUNvEopkZ9ugWBm4BKkAT9L2y4PtL4aog7Qjqp5uinc2PoD3XcfGEAfafLpBhy",
  "key2": "adS42VzocVmGvYdTzLnU8TPVSovgJqanL5rRttHk21Q7JnrHoS8bbmzJXFGLSALBcRyxn5nndxU4khqRAUFCzgk",
  "key3": "3NKic3UcNuWrTQzkqj1FxriCqrPpdUshre7Km6ymv9PFL6XXEbZxxQoMBAgYAWwGPxCCSvoNKbpV9zMJ9WJZobFa",
  "key4": "xJvZQqDzVNMnRpwfda5aZeyNKFQDHN4svEvoFNYwA32ssw1bYMRgYtXMPDCimrgnvBQFATvSDneeVW3h9oNAYmi",
  "key5": "5x2DAZ2GY4tTLayKWvF9iMhvj83pncfVBJx2xLBuoeyqCFeKN5zgKqeQijgk6wNQVhb2KiBsiPtuLjAbAuCrn12G",
  "key6": "szpCifSFPnFvXhP3KH29RVtaGHZXwXuRWUmnbuvSuyRBovpkxhawtHQh7dgoz72r4yEmdkaA5XUfDpVL3NGptVj",
  "key7": "3gzPSKaZhgELsDGQ49rhFy71QDoukB7pUCC6QVJZt5EEeeDm5kkXDtG92FQ6wmxU278EMuGo2snQpQUKkrUpX3qa",
  "key8": "54HWsxnbqTairUDPJTmDZvMYmUmGN1unjJxcwUV5kusvzvYFuRrp5Mg2roEWsveroSJxRd4XZC7J5Ja541hWxt7K",
  "key9": "2Azyu9N5zxkBP5yeoWgx9Y17RxJ1znzAVtjrciMVCEHwNDNgApSWzHv9rEAqTXqKaUJV1fLaVoAm8YDjwwFHSzZe",
  "key10": "25ziawLHKGARWx4VpmviJd7eVJuPSPwH2LXfcaTDXYq3Xqghh9dTw34i65vKFncHDnNPMMBzAz84z27pWaFJT6ou",
  "key11": "5ASFGi8DsSmn8d37Ab5H9zBJUw2pAyBGWJmGdz8dJpYcTCKPEsgsbqterWvr6VTArLMJMbGmZwdHsnm8obVUufcX",
  "key12": "3dHF73z8DuKgFSCUn8Noh3VQY5RgmbwRoN2K6uuBbuvpBrpgxWdMCfJPp6JQRaBhvRVT9GKEot5YPLFXtnBw1fyG",
  "key13": "CVVZbb6Niz1PuVFcTzevmbTCQWtMmKA91we2Fiit5stNLtYqjVDSjsvT3PTCRaf4yzoYAwby9Li6RNhZ3xsRbbo",
  "key14": "45YKCTFBBgpyg7ehoeAVokTHAornSm8tCuCZ1hfmpTBvahKBwXeUZDQYZLrk8jcwBL6Kyj3eFnphA8X2y93vA836",
  "key15": "PrRsQAssF3foAv1X5rYW3HPtzH7j4DjGKnD5tgV8EJMTtdAZBAPGnv2Q3UkL3pNAgL4bzRvtgQj2maarmMvqrCu",
  "key16": "5v6AHvby6RS4u572kkE5P6JDTPjs1zmkYeuWuaV17r5UL4LZhF3xacdEPnfd3E56js9T3iDqrCv3W2jxHFXtHkJt",
  "key17": "26AAmJDUHpxWCLdfSsjjNWdtJcRo3C8eRytMkH5BiYa3gieApe5VC73SQJue86st8AM1CDx9ZWFJFWMMxGZPXY4P",
  "key18": "24QWyQTMMcV4u1ZqRvLS139eJUurBv9ofFic64Ao9rjyUjqCidAidW2XuWugMMi9S2YjCiTEnW9XESnRk5pk1Dxa",
  "key19": "7w8BBk9zmKn59wtca7QjojPdmWGZNop5sDWbwcahUQLkg8nyF5JKfVNpTq9vciFFU5otdJDkPWU7RE1CWijP4nZ",
  "key20": "7aosmP8XCQpntBvqNEjfckjhEA8Z3B6a3aytdZjYsU9iQv2Y8zQzbT4rHu8u1FW4VQDHGmogyDUKNJxmoexTV26",
  "key21": "2abeDMGD4iJXzTcfExK74XqpJ5BbbuEP8cs9cMo8KUkZ9KZDYtkDNPowGovL7jRGg9crpHKY7yD6UxQah5HFbXVL",
  "key22": "59gM9CjZmQxuUKzYyhSpE2p5ABZrubbvLRXVtht7yQe8bTaXY15JiixZDeLCFLTyyLbTBimq9J8d92obNr5Dzzup",
  "key23": "5s6fcApUtUfi6wxtq3heHL9CsGhXuNFhirJArMVNVHawkSRgvFKoL6mPKXiG83r3mG9ZpTyCK38aF1CSVdwDN639",
  "key24": "5vY8wf3uL3A11ZTpjG6JD9C5mTnAt5JBHpHDES15KGxtEiHw3i3ESifLWh1hypuUbAbv3dWrunEF6XCAtr4yDFHa",
  "key25": "2mNEBuUzNQfcG8UzyS8wyczmLcJqbnjbaudGtwL3CCDAgnWa92ZC6NPm6cUZ1SH9MSqE8zvkHBqKc9phPVby2jTk",
  "key26": "5ZFmAks3rtJJP1RwESTzTSoqk8iwXiLdndUPN3FbkyQAy3gtwLvpxDRpKPY6K7nnFvcJKM2cm54Z7xLpmnpiaNhS",
  "key27": "2fZJpxo3UZe2wNcaMKhQiTyAARpKLkhXymdf1aXCsjs5WmCK1ayDSDdGnQb1vuujeH6BcXSoPAAmiBDFWT7KaEno"
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
