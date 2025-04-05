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
    "3R3cvbs9Q2idM4y9JwVHjzyvbxiGCQ5YNEnLVaeMdTwqd6JgfsYeGnh9gYYksXx8aF1q1FHhdn7aBtUnQPQ4scZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zSq8R8J84Xn4gh2NDjemd6iN729MADtAhjmbJ95MdmAdAFaXtpg8sCwUABmzFYRt1C2fEUMhe9LnKHVp5H9GEgM",
  "key1": "2Xhg6LWY12LBrBUevrBkjGo7g1C1k2aki9iWn9sRh15cJJZhnj8NWPG6pJnYZEeR86FLM3s7qXBK9w3GPgLVEYbg",
  "key2": "vT273hGB3oq88xFfQypLicbMkTkuFfWxudA63UX13e3eTzfmvS4CggXQ1QPmzgAd7fn8pGnxu2nCZdDcTGTS8DY",
  "key3": "sks8MnLqKMvmNTgTHq7G58jtSrzCQao5YARSuzJnyKVwyyYVAie4yHm8be6KhjSxWHUErCBtFuFz2ASjQhA2wKQ",
  "key4": "34JtT3DQ5tmspg1SuvautYSMEmndknaL3V96uDAJ7KVsgcbf9gXYjNofkcMViK3SiEstX95HD9N3vrDsPnppgui7",
  "key5": "2MYhQBW2RbsoZk1gd3FVRctSHRL2ebWMMGaSzs6rb18SpiV2A1RSHqVQzyXnnfV3rsWwqyRfx8M5rfKBT2TzFFky",
  "key6": "4KhmnEHnB7bweSC2s81rZ7KrgkPLnjrU9R23uMY95rBvQSizLyqAYFGKANDCSQeKUJ8ZnP8A3GNJaKjSbqKUhSTR",
  "key7": "2iyM6WWmFYTCud7nwiyt631F4AoLDNqqoGFHUPp4Fk1Ad7jeRNxxY2EMG1jdjZFksKD4LdaB116y64uAjWmpEUJm",
  "key8": "sruScJobVwAP8AH9EdHQ7LTpXWPYBgbsD4wfRC1RoH4TctWiW2a5HWDvWMQBb9qFVXkomsCLcStmCNHzGV6rMSc",
  "key9": "5q5LUYnatbnLcX5fiR5ipcPxdsh9NJxri5k4vxk4yTA8WwiFU11wwP8csMTquNT6FxSeYE3uxg4Q8PNJjd8GKEzS",
  "key10": "jDC8LoNwsfzCA3cBx8CXWLMWzcfBqj4SiJTPQXVbTWXs8pcxGQpo5MkYS9JyfX48oQ4ZzGwd3xBt3NU1HPLDABn",
  "key11": "2bdGizAeUx5HGm49az6Jhf8Xyxq969Uj51WeAGN57Jg3K35BwuBp22F3p3c3QWp8syJAYgwZMtfwdxympvMwaZPN",
  "key12": "JCt5sSKo69n7foiDs7q4uN6MDRe3H5A289CsxebsCzsUBymtn39TPcNAqgtT362SSxhtEtD1h49Ve1hsFvNBpeF",
  "key13": "3Ma8Wa9VSzLfpXhjgoS8BsvHMcRDdWM9Lpz8EPdhB2PSzvzc4N3caBVxeJrg8kjqSEpYEdKEYFbhe4Q47nEeyyjV",
  "key14": "212ymCu7iXtMJF9yVTBHdNDBaKDDpPZemShnxATr9Rwa35EHwdKaHEepJZkqZxD7e1E1YX5cTJvjwf2QggtUBhzq",
  "key15": "31C6AFJQjfrJQqfirsuH2FF5EeRaPKCW9VaN1hb2C19Pzhz6hcA22fJTb6JnVWjWpdNEgswxPg8tdxHtz5jZpB9Y",
  "key16": "2498TUCyfx5pXDSZ6JuYeFZu8MRNAagjiXf9TQLU8BDVbiCg58nqrsNnJvmRniWJq8epbRgDdvyPoS2ru1J2BzXr",
  "key17": "3w9UAku7e6Ex2pC4BShGny5qiUBBAM4oUVuiXBGtpXbf17gMV6gRCDxBAbSyCku3f7jsYZ1fQt6D4b5tRfHADuiF",
  "key18": "28ZtmQ5bXrvRMkMDMT9ATAvo1QWN7n5mgcWmJ6m2drYGbtASkNj3LHE74Tq3xzxw1n5649aKyC8YSr7LJWR6EMy7",
  "key19": "2uudUf4vCfe5gdiUATuNzNxN7dhzw24TCebFx6h4behSHrxn1PC71nWzHuY38rp6cuYCXzfA9aY8qXjmuCc5iiA7",
  "key20": "mLmw7ybfdoWa4TTN4oAAFDW1wwPZ714XFj1WjcZ5ebr593Fi25YqiNVL3h4W9bAvPMbeSw9dQy27NNdeqk2beRq",
  "key21": "9esGctFngogzNLvp4RzdCXJqucfWFgthvMFceWeiGx8Ew497r3d38oRxF9AtLT1i9aS4tsFTDy5HWveD79V4DVu",
  "key22": "2KhcFfLpV96ZFJwSsgfGPir8jExKnynLzjt6dbu6KokZiuwpT2H8YiQqeHQJdd9YnRjp4HoG5DUexKPL1QLtFXJn",
  "key23": "v7u6LwuVJ3jCUTS1x44kxw2hJ4WXE5NhYowLd5KJMy6H6C1DMvpkChAtCP8eogLQ49p5nNaxK3MQFdFNBJZvhCP",
  "key24": "4ctD7PRNPMbQvjFiKDddWuYPgPeJEvL8W1pJBJF4DwCzQJaBZhA6uShVij4rKpjCNwfpwyJ3d3iRtjuXgVvc5hcf",
  "key25": "5dekSiG9VY6jQSiBP8RtnYEVXpsmiH4BeJEryZzXxAuZXBFdeFXni3kvuB8kjztr5keSsNyM1u8FyLxkLNpyYduM",
  "key26": "21VLbvQggDszb6Qk6WpngDSYZWnM1wZ13fdbso3Zq5Jhuvr94hAZft1BxQqnrpqG6neRc7HqurGyTgLujufAzzbJ",
  "key27": "3ghnu78KmAJhTPRF3a64wRFKETWAXsUcpMGBRWpXPNXfnb9LLi6A4QYA4LstXajRAjjmjaobvFbcwb2WRyeTNABc",
  "key28": "5nrXcEXTgZ7GsdghicaR4KubSKYsNEq8Lyx9zKauZ1DypSgTPHdhq3Bteii1oYMhQJEpwURG3N3TUHJpsFMQi8s3",
  "key29": "wuCbxQ9DgYfY47PpBPLe9J3YisyB4KMQGpbcC9DzJSgHjmwFnAQw3bwZoZgeRzKPLUzDWteBNbzGJWphzUnuQLS",
  "key30": "5ejS6UN4TTZppceaXeaWn8GNECGgC1ESXwuWAM2vdzKP58qQpFNqkAcy6kKiXEEUSqQq4HzcFyFWZ38t71BgRzud",
  "key31": "2WW4iGAmvCefqVZ61K31VV2bLUtH94TKYwPLzN48pUAnR5MTrYChPEuFd4HMbRdTdoei9tS63PGYXXWLD6ze5eFG",
  "key32": "52ik8WvyqVkZmkVLU98dG9PJArMTmNr7onhDjyv2HbEARHnDTPeNuUiw65CxwprF8geXJrnPgWkvWSpscBfHh7hB",
  "key33": "4gZCdr1AzBjQAJ9ErZcvZk4CW82HxA5gAA28o8tEGbYU45SVBpdbgaRYFWnY4uvKjdUhFLF8ZRLEZRGwDooW9eR5",
  "key34": "CneJFRsYHJTr5McsfdEtx1NHo8Jm9rGAeJ1ib9SenSKsEx9Xy3L6G9zotK5caP5cg6eMmA7ChDscQJ9NDG3Rtzw",
  "key35": "43MrafpXV7vQxMfcDW3J3kznnY56T8Zk4EgzCRon1PUd6FC7wmdghvtvSPLMkkD3HBmKBEM5KWX5QsUgnyWJP9aY",
  "key36": "2fRxXHnSbHhQDAfa95SuyMK3rnNYf1TdmvaMjpN7Rc2w5StSPhDickQZQtTBLhaSRCcbHMwtwjGKUn4aVo1z3wEu",
  "key37": "2QugHyAtSmMtdLKckZDCr1ScpDkUEsDz56Du3yceqbUqjJz7BTy2FJjSGJiHgjnVP4DoTyFo31rej9kmU8ACR3uw",
  "key38": "45rZGrjWNDfSeuw6UEhrgjYVa1S8oc42qwhxouBKMEZzrRia4vbL8eipffn31UzgGaNbWbrDSeqxhKtquGyFJbVS",
  "key39": "iPT7YhPYJHMc4cBjcqNXZChhvxQfVKmwz2dLFBvySZYeGyecfCaLE83BKZYL4nqwEBo5na6wo6PcjjmRasr4VmU",
  "key40": "22XM8YzsAGfL8PZwEhpFo1qHvAhnBqh9c9svo6568DheBwYMLeeS7SQ9hTTWVeUduEFaq9GEGZeZZeseZgZgLaLp",
  "key41": "gqeqmz13yT6BXYdPenG5hB8Fc5ncb4G4bcQz7aCpgCbsHVKVXj9gubdX79fursfeiETic8SRPkNrydui5uff13Z",
  "key42": "3qAssQYfn9j87gbDEchEXr4jo7zfMFka2k1SG38ki5uy5FvZVW9AS3vFe95AsBPi2JzGncGqTsDewyGkHzq6LupN",
  "key43": "5HZfDMvNAcBxCwRCFm5fb8cbN85q4WWtEQjFe2KNQTx2PMuGLPD2NqhpurKUwf94J2cquju3rhEBq98qTfmPLWML"
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
